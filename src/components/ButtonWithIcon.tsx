import React from "react";
import { VariantProps, tv } from "tailwind-variants";
import Button from "./Button";

type ButtonWithIconProps = VariantProps<typeof button> & {
  icon: JSX.Element;
  text: string;
};

const button = tv({
  variants: {
    iconSize: {
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h5 w-5",
    },
    position: {
      iconLeft: "mr-1",
      iconRight: "ml-1 flex-row-reverse",
    },
  },
});

const ButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonWithIconProps>(
  ({ icon }: ButtonWithIconProps, ref) => {
    return <Button ref={ref}>{icon}</Button>;
  },
);

export default ButtonWithIcon;
