import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardProps } from "../components/data-display";
import { Button } from "../components/actions";

const actionButton: Button = new Button({
  children: "Buy Now",
  mode: "primary",
  size: "large",
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
    image:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    imageAlt: "Shoes",
    primaryAction: actionButton.render(),
  },
} as Meta;

type Story = StoryObj<CardProps>;

export const Primary: Story = {
  args: {
    imageMode: "fill",
  },
};
