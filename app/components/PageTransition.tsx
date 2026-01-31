"use client";

import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

// Simple wrapper without page transitions - just renders children directly
export default function PageTransition({ children }: PageTransitionProps) {
  return <>{children}</>;
}

// Loading overlay component for specific cases if needed
export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <span className="text-sm text-gray-600 font-medium">Loading...</span>
      </div>
    </div>
  );
}

// Smooth link component with built-in hover animations only
export function SmoothLink({
  href,
  children,
  className = "",
  ...props
}: {
  href: string;
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <a
      href={href}
      className={`transition-all duration-200 hover:scale-105 active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
