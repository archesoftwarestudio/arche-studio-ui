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
    mode: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    mode: "secondary",
  },
};

export const Neutral: Story = {
  args: {
    children: "Button",
    mode: "neutral",
  },
};

export const Accent: Story = {
  args: {
    children: "Button",
    mode: "accent",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "large",
  },
};

export const Medium: Story = {
  args: {
    children: "Button",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "small",
  },
};

export const Block: Story = {
  args: {
    children: "Button",
    block: true,
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    outline: true,
  },
};
