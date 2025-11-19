import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  fullWidth?: boolean;
  children: ReactNode;
}

export const Button = ({ 
  className, 
  variant = "primary", 
  fullWidth, 
  children, 
  ...props 
}: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-lg font-bold transition-all duration-200 active:scale-95 hover:cursor-pointer";
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/30",
    outline: "border-2 border-red-600 text-red-600 hover:bg-red-50"
  };

  return (
    <button
      className={cn(
        baseStyles, 
        variants[variant], 
        fullWidth ? "w-full" : "", 
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};