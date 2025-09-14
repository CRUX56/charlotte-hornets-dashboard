"use client";

import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import React from "react";

import { Auth0Provider } from "@auth0/nextjs-auth0";

import { ReactNode } from "react";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700"],
  subsets: ["latin"],
});
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Charlotte Hornets Stats Dashboard</title>
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans`}>
        <Auth0Provider>{children}</Auth0Provider>
      </body>
    </html>
  );
}
