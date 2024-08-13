import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardProps } from "../components/data-display";

export default {
  title: "Data-Display/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    title: "Nikes on my feet",
    body: "Make my style feel complete",
    imageUrl:
      "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    imageAlt: "Shoes",
    shadow: true,
    primaryAction: {
      text: "Buy Now",
      onClick: () => {
        alert("You bought the shoes!");
      },
    },
  },
} as Meta;

type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    imageMode: "default",
  },
};

export const Paddings: Story = {
  args: {
    imageMode: "padding",
  },
};

export const Overlay: Story = {
  args: {
    imageMode: "overlay",
  },
};

export const Compact: Story = {
  args: {
    compact: true,
  },
};

export const Neutral: Story = {
  args: {
    neutral: true,
  },
};

export const Horizontal: Story = {
  args: {
    horizontal: true,
  },
};

export const Responsive: Story = {
  args: {
    responsive: true,
  },
};
