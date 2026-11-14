import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white shadow-md hover:shadow-lg hover:shadow-violet-500/25 hover:brightness-105",
        electric:
          "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md hover:shadow-cyan-500/25 hover:brightness-105",
        secondary:
          "bg-white text-navy-900 border border-slate-200 shadow-soft hover:bg-slate-50 hover:border-slate-300",
        outline:
          "border border-slate-300 bg-transparent text-navy-800 hover:bg-slate-100 hover:text-navy-950",
        ghost:
          "text-navy-700 hover:bg-slate-100 hover:text-navy-900",
        white:
          "bg-white text-violet-700 hover:bg-slate-100 shadow-md font-bold",
        subtle:
          "bg-violet-50 text-violet-700 hover:bg-violet-100 border border-violet-100",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-13 rounded-2xl px-7 py-3.5 text-base font-semibold",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
