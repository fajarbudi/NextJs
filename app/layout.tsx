"use client";
import "./globals.css";
import { Montserrat } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
const inter = Montserrat({ weight: "300", subsets: ["latin"] });

export const metadata = {
  title: "Elektronika",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  AOS.init();
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
