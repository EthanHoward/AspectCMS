import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aspect:CMS",
  description: "A CMS geared towards Photographs, Videos and with support for Audio.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className + "w-full h-full"}>{children}</body>
    </html>
  );
}
