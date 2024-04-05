import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "../components/actions";

export default {
  title: "Actions/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "medium",
    outline: false,
    block: false,
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
