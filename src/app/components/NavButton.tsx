import React from "react";

interface NavButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  testId?: string;
}

export default function NavButton({
  to,
  children,
  className = "",
  testId,
}: NavButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 bg-[var(--hornetsTeal)] text-white hover:bg-[var(--hornetsPurple)] focus:outline-none ${className}`}
      onClick={() => (window.location.href = to)}
      data-testid={testId}
    >
      {children}
    </button>
  );
}
