import { Slot } from "@radix-ui/react-slot";
import React, { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button> & {
    variant?: "solid" | "soft" | "outlined" | "link" | "danger";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
  };

const button = tv({
  base: "flex items-center justify-center gap-1 rounded-md text-center disabled:pointer-events-none disabled:opacity-50 transition-colors",
  variants: {
    size: {
      sm: "h-7 px-3 text-xs font-medium",
      md: "h-10 px-4 py-2 text-sm font-medium",
      lg: "h-12 px-7 text-md font-medium",
    },
    variant: {
      solid: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
      soft: "bg-blue-100 text-blue-700 hover:bg-blue-200 active:bg-blue-300",
      outlined:
        "border border-blue-100 text-blue-500 hover:bg-blue-100 hover:text-blue-600 active:bg-blue-200",
      link: "text-blue-500 hover:underline underline-offset-2 hover:text-blue-600 active:text-blue-700",
      danger: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
  },
});

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { size, variant, className, asChild = false, ...props }: ButtonProps,
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={button({ size, variant, className })}
        {...props}
      ></Comp>
    );
  },
);

export default Button;
