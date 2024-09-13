"use client";
import { sidebarLinks } from '@/constants';

import React from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';




interface SidebarProps {
  user: {
    firstName: string;
    lastName: string;
  };
}

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Image
          src="/icons/truepaylogotrans.png"
          alt="Trupay Logo"
          width={220}
          height={110}

        />


        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn('sidebar-link',
                'text-black-2', { 'bg-bankGradient': isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({ 'brightness-[3] invert-0': isActive })}
                ></Image>
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}
        USER
      </nav>

      FOOTER
    </section>
  );
};

export default Sidebar;
