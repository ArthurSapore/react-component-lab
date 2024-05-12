import { Slot } from "@radix-ui/react-slot";
import React, { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button> & {
    asChild?: boolean;
  };

const button = tv({
  base: "flex items-center justify-center gap-1 rounded-md text-center disabled:pointer-events-none disabled:opacity-50 transition-colors",
  variants: {
    size: {
      sm: "h-7 px-3 text-sm font-thin",
      md: "h-10 px-4 py-2 text-sm font-medium",
      lg: "h-12 px-7 text-md font-medium",
    },
    variant: {
      primary: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
      secondary:
        "bg-blue-100 text-blue-700 hover:bg-blue-200 active:bg-blue-300",
      tertiary:
        "border border-blue-200 text-blue-600 hover:bg-blue-100 active:bg-blue-200",
      quaternary: "text-blue-600 hover:bg-blue-100 active:bg-blue-200",
    },
    icon: {
      center: "",
      left: "",
      right: "flex flex-row-reverse",
    },
    status: {
      danger: true,
      success: true,
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      status: "danger",
      class: "bg-red-700 text-white hover:bg-red-800 active:bg-red-900",
    },
    {
      variant: "primary",
      status: "success",
      class: "bg-green-700 text-white hover:bg-green-800 active:bg-green-900",
    },
    {
      variant: "secondary",
      status: "danger",
      class: "bg-red-100 text-red-700 hover:bg-red-200 active:bg-red-300",
    },
    {
      variant: "secondary",
      status: "success",
      class:
        "bg-green-100 text-green-700 hover:bg-green-200 active:bg-green-300",
    },
    {
      variant: "tertiary",
      status: "danger",
      class:
        "border border-red-200 text-red-600 hover:bg-red-100 active:bg-red-200",
    },
    {
      variant: "tertiary",
      status: "success",
      class:
        "border border-green-200 text-green-600 hover:bg-green-100 active:bg-green-200",
    },
    {
      size: "sm",
      icon: "left",
      class: "pl-3 pr-4",
    },
    {
      size: "sm",
      icon: "right",
      class: "pl-4 pr-3",
    },
    {
      size: "md",
      icon: "left",
      class: "pl-5 pr-4",
    },
    {
      size: "md",
      icon: "right",
      class: "pl-4 pr-5",
    },
    {
      size: "lg",
      icon: "left",
      class: "pl-6 pr-7",
    },
    {
      size: "lg",
      icon: "right",
      class: "pl-7 pr-6",
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size,
      variant,
      status,
      icon,
      className,
      asChild = false,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={button({ size, variant, status, icon, className })}
        {...props}
      />
    );
  },
);

export default Button;
