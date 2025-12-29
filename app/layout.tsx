import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

import Main from "@/components/Main";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "三秋十李 - 产品设计师",
  description:
    "一个在产品设计届努力攀登的新生，拥有一颗毫无边界的好奇心和一股心无旁骛的探索力",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-screen h-screen  antialiased flex items-center`}
      >
        <Main>{children}</Main>
      </body>
    </html>
  );
}
