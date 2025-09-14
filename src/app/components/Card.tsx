import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ title, children, className = "" }: CardProps) {
  return (
    <div
      className={`p-6 !important bg-[var(--background)] rounded-xl shadow-lg  flex flex-col ${className} `}
    >
      <h2 className="text-2xl font-semibold text-[var(--hornetsPurple)] mb-4 text-left w-full">
        {title}
      </h2>
      <div className="w-full px-2 md:px-4 pb-2 md:pb-4">{children}</div>
    </div>
  );
}
