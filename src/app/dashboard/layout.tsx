"use client";

import React, { ReactNode } from "react";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <aside className="w-[250px] h-full bg-[var(--background)] fixed left-0 top-0 flex flex-col align-center justify-center py-8 z-10">
        <Logo className="mb-8" />
        <NavBar />
        <div className="mt-auto w-full flex justify-end">
          <Footer />
        </div>
      </aside>
      {/* Main Content */}
      <main
        className="flex-1 h-full overflow-y-auto p-4 md:p-8 bg-[var(--lightGray)]"
        style={{ marginLeft: 250, paddingLeft: 15, paddingRight: 15 }}
      >
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
