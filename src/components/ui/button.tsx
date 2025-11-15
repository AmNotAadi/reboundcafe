"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-olive)] text-white hover:bg-[#5e7b1f] focus-visible:ring-[var(--color-gold)]",
        secondary:
          "border border-[var(--color-olive)] text-[var(--color-olive)] hover:bg-[var(--color-olive)]/10 focus-visible:ring-[var(--color-olive)]",
        ghost:
          "text-[var(--color-gold)] hover:text-white hover:bg-[var(--color-gold)]/20 focus-visible:ring-[var(--color-gold)]",
      },
      size: {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
