import React from "react";
import Image from "next/image";

type LogoProps = {
  testId?: string;
  className?: string;
};

export default function Logo({ testId, className }: LogoProps) {
  return (
    <div data-testid={testId} className={className}>
      <Image
        src="/hornets-logo.png"
        alt="Charlotte Hornets Logo"
        width={250}
        height={250}
        className="h-auto w-auto"
        priority
      />
    </div>
  );
}
