import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "../components/actions";

export default {
  title: "Actions/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "accent",
          "neutral",
          "success",
          "warning",
          "error",
          "info",
          "link",
          "ghost",
          "glass",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["large", "medium", "small", "extra-small"],
      },
    },
    outline: { control: "boolean" },
    block: { control: "boolean" },
    circle: { control: "boolean" },
    square: { control: "boolean" },
    wide: { control: "boolean" },
  },
} as Meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "medium",
    outline: false,
    block: false,
    circle: false,
    square: false,
    wide: false,
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
    size: "medium",
    outline: false,
    block: false,
  },
};

export const Neutral: Story = {
  args: {
    children: "Button",
    variant: "neutral",
    size: "medium",
    outline: false,
    block: false,
  },
};

export const Accent: Story = {
  args: {
    children: "Button",
    variant: "accent",
    size: "medium",
    outline: false,
    block: false,
  },
};

export const Success: Story = {
  args: {
    children: "Button",
    variant: "success",
    size: "medium",
    outline: false,
    block: false,
  },
};

export const Warning: Story = {
  args: {
    children: "Button",
    variant: "warning",
    size: "medium",
    outline: false,
    block: false,
  },
};

export const Error: Story = {
  args: {
    children: "Button",
    variant: "error",
    size: "medium",
    outline: false,
    block: false,
  },
};

export const Info: Story = {
  args: {
    children: "Button",
    variant: "info",
    size: "medium",
    outline: false,
    block: false,
  },
};

export const Link: Story = {
  args: {
    children: "Link Button",
    variant: "link",
    size: "medium",
    outline: false,
    block: false,
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
    size: "medium",
    outline: false,
    block: false,
  },
};

export const Glass: Story = {
  args: {
    children: "Glass Button",
    variant: "glass",
    size: "medium",
    outline: false,
    block: false,
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "large",
    outline: false,
    block: false,
  },
};

export const Medium: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "medium",
    outline: false,
    block: false,
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "small",
    outline: false,
    block: false,
  },
};

export const ExtraSmall: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "extra-small",
    outline: false,
    block: false,
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "medium",
    outline: true,
    block: false,
  },
};

export const Block: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "medium",
    outline: false,
    block: true,
  },
};

export const Circle: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "medium",
    circle: true,
  },
};

export const Square: Story = {
  args: {
    children: "Square Button",
    variant: "primary",
    size: "medium",
    square: true,
  },
};

export const Wide: Story = {
  args: {
    children: "Wide Button",
    variant: "primary",
    size: "medium",
    wide: true,
  },
};
