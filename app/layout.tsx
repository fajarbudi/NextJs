"use client";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const inter = Montserrat({ weight: "400", subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
useEffect(() =>{
  AOS.init({
    delay: 200,
    duration: 1200,
  });
})
  
    return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    );
}
