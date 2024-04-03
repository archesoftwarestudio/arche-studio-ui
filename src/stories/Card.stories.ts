import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardProps } from "../components/data-display";
import { Button } from "../components/actions";

const actionButton: Button = new Button({
  children: "Buy Now",
  onClick: () => {
    alert("You bought the shoes!");
  },
});

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
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    imageAlt: "Shoes",
    primaryAction: actionButton.render(),
  },
} as Meta;

type Story = StoryObj<CardProps>;

export const Standard: Story = {
  args: {
    imageMode: "standard",
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
