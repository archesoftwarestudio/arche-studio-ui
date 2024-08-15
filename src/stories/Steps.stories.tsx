import { Meta, StoryObj } from "@storybook/react";
import { Steps, StepsProps } from "../components/navigation"; // Ajusta la ruta según tu estructura de archivos

export default {
  title: "Navigation/Steps",
  component: Steps,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    color: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "accent",
          "info",
          "success",
          "warning",
          "error",
        ],
      },
    },
  },
  args: {
    direction: "horizontal",
    size: "md",
  },
} as Meta<StepsProps>;

type Story = StoryObj<StepsProps>;

export const HorizontalSteps: Story = {
  args: {
    steps: [
      { label: "Step 1", completed: true, color: "primary" },
      { label: "Step 2", active: true, color: "accent" },
      { label: "Step 3", color: "warning" },
    ],
  },
};

export const VerticalSteps: Story = {
  args: {
    steps: [
      { label: "Step 1", completed: true, color: "info" },
      { label: "Step 2", active: true, color: "success" },
      { label: "Step 3", color: "error" },
    ],
    direction: "vertical",
  },
};

export const SmallSteps: Story = {
  args: {
    steps: [
      { label: "Step 1", completed: true, color: "primary" },
      { label: "Step 2", active: true, color: "secondary" },
      { label: "Step 3", color: "accent" },
    ],
    size: "sm",
  },
};

export const LargeSteps: Story = {
  args: {
    steps: [
      { label: "Step 1", completed: true, color: "success" },
      { label: "Step 2", active: true, color: "info" },
      { label: "Step 3", color: "warning" },
    ],
    size: "lg",
  },
};
