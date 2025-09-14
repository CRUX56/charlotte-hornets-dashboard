"use client";

import React, { ReactNode } from "react";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <aside className="w-[250px] h-full bg-[var(--hornetsPurple)] fixed left-0 top-0 flex flex-col items-center py-8 z-10">
        <Logo className="mb-8" />
        <NavBar />
        <div className="mt-auto w-full">
          <Footer />
        </div>
      </aside>
      {/* Main Content */}
      <main className="ml-[250px] flex-1 h-full overflow-y-auto p-8 bg-[var(--hornetsGray)]">
        {children}
      </main>
    </div>
  );
}
