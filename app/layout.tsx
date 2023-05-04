"use client";
import "./globals.css";
import { Montserrat } from "next/font/google";
const inter = Montserrat({ weight: "300", subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
