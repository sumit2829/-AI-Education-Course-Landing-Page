import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-violet-50 text-violet-700 border border-violet-200/60",
        purple:
          "bg-violet-600 text-white shadow-xs",
        blue:
          "bg-blue-50 text-blue-700 border border-blue-200/60",
        electric:
          "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-xs",
        success:
          "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
        warning:
          "bg-amber-50 text-amber-700 border border-amber-200/60",
        outline:
          "text-navy-700 border border-slate-200 bg-white",
        dark:
          "bg-navy-900 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
