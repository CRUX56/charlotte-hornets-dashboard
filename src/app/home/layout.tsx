"use client";

import React, { ReactNode } from "react";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      {/* Left: Navigation and Logo */}
      <div className="w-1/3 bg-[var(--background)] flex flex-col items-center justify-between py-8">
        <Logo className="mb-8" />
        <NavBar />
        <Footer />
      </div>
      {/* Right: Main Content */}
      <div className="w-2/3 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
