import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 touch-manipulation",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 shadow-lg hover:shadow-xl hover:scale-105 active:scale-100",
        outline:
          "border-2 border-zinc-900 bg-transparent text-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-900 active:scale-95",
        ghost:
          "hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95",
      },
      size: {
        default: "h-11 px-6 sm:px-8 py-2 text-sm",
        sm: "h-9 px-4 sm:px-6 text-xs sm:text-sm",
        lg: "h-12 sm:h-14 px-8 sm:px-10 text-sm sm:text-base",
        icon: "h-10 w-10",
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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

export { Button, buttonVariants };
