import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ title, children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-[var(--background)] rounded-xl shadow-lg p-6 flex flex-col items-center ${className}`}
    >
      <h2 className="text-2xl font-semibold text-[var(--hornetsPurple)] mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}
