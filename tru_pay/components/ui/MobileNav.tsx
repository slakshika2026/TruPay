"use client";
import React from 'react'
import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


const MobileNav = ({ user }: MobileNavProps) => {
   const pathname = usePathname();
   return (
      <section className='w-full max-w-[264px]'>
         <Sheet>
            <SheetTrigger>
               <Image
                  src="/icons/hamburger.svg"
                  width={30}
                  height={30}
                  alt="menu"
                  className='cursor-pointer'
               />
            </SheetTrigger>
            <SheetContent side="left" className='bg-white'>

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
                           className={cn('mobilenav-sheet_close w-full',
                              'text-black-2', { 'bg-bankGradient': isActive })}
                        >

                           <Image
                              src={item.imgURL}
                              alt={item.label}
                              width={20}
                              height={20}
                              className={cn({ 'brightness-[3] invert-0': isActive })}
                           ></Image>

                           <p className={cn("text-16 font-semibold text-black-2", { "!text-white": isActive })}>
                              {item.label}
                           </p>
                        </Link>
                     );
                  })}

                  USER

               </nav>
               <SheetClose />
               FOOTER
            </SheetContent>
         </Sheet>

      </section>
   )
}

export default MobileNav

