"use client";

import React, { ReactNode } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function HomeLayout({ children }: { children: ReactNode }) {
  const { user } = useUser();
  return (
    <div className="flex h-screen w-full">
      {/* Left: Navigation and Logo */}
      <div className="nav-sidebar w-1/3 bg-[var(--background)] flex flex-col items-center justify-between py-8">
        <Logo className="mb-8" />
        <h2 className="text-center text-xl font-semibold text-[var(--hornetsPurple)] px-4 mb-1">
          Welcome {user?.name ? user.name : "Guest"} to the Charlotte Hornets
          Dashboard
        </h2>
        <NavBar />
        <Footer />
      </div>
      {/* Right: Main Content */}
      <div className="w-2/3 h-full flex flex-col">{children}</div>
    </div>
  );
}
