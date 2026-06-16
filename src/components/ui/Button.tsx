import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        {
          "bg-primary text-white hover:bg-primary-light hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]":
            variant === "primary",
          "bg-secondary text-white hover:bg-secondary-light hover:shadow-[0_0_20px_rgba(15,23,42,0.4)] dark:bg-white dark:text-secondary hover:dark:bg-gray-200":
            variant === "secondary",
          "border-2 border-primary text-primary hover:bg-primary/10":
            variant === "outline",
          "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800":
            variant === "ghost",
          "text-sm px-4 py-2": size === "sm",
          "text-base px-6 py-3": size === "md",
          "text-lg px-8 py-4": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
