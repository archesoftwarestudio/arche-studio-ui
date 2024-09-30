import type { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeProps } from "../components/data-display";

export default {
  title: "Data-Display/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["default", "outline"],
    },
    color: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "accent",
        "info",
        "success",
        "warning",
        "error",
        "ghost",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    icon: { control: "text" },
  },
  args: {
    type: "default",
    color: "primary",
    size: "md",
    children: "Badge",
  },
} as Meta<BadgeProps>;

type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: {
    type: "default",
    color: "primary", // Asegúrate de que el color esté bien definido
  },
};

export const Outline: Story = {
  args: {
    type: "outline",
    color: "primary", // Aplica el color al outline
  },
};

export const SmallSize: Story = {
  args: {
    size: "sm",
    color: "secondary", // Prueba con un color diferente
  },
};

export const LargeSize: Story = {
  args: {
    size: "lg",
    color: "accent", // Otro color de ejemplo
  },
};

export const WithIcon: Story = {
  args: {
    icon: <svg className="w-4 h-4">...</svg>,
    children: "With Icon",
    color: "info", // Prueba con color info
  },
};

export const SuccessBadge: Story = {
  args: {
    color: "success",
  },
};

export const WarningBadge: Story = {
  args: {
    color: "warning",
  },
};

export const ErrorBadge: Story = {
  args: {
    color: "error",
  },
};

export const CloseButton: Story = {
  args: {
    onClose: () => {
      console.log("hola");
    },
  },
};
