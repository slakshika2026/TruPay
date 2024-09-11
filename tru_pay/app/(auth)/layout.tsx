import { Main } from "next/document";

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <main>
         {children}
      </main>
   );
}
