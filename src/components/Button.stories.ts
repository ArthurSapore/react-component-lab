import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    variant: "solid",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
    },
    size: {
      control: {
        type: "inline-radio",
      },
    },
  },
  tags: ["autodocs"],

  // ...
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  // ...
  args: {
    variant: "solid",
    children: "Button",
    size: "md",
  },
};

export const Soft: Story = {
  args: {
    variant: "soft",
    children: "Button",
    size: "md",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Button",
    size: "md",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Button",
    size: "md",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Button",
    size: "md",
  },
};
