import { Meta, StoryObj } from "@storybook/react";
import { Progress, ProgressProps } from "../components/feedback"; // Ajusta la ruta según tu estructura de archivos

export default {
  title: "Feedback/Progress",
  component: Progress,
  parameters: {
    layout: "inline", // Usamos 'inline' para que la story se muestre dentro del flujo de contenido
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100 },
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
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
  },
  args: {
    value: 50,
    color: "primary",
    size: "md",
  },
} as Meta<ProgressProps>;

type Story = StoryObj<ProgressProps>;

export const PrimaryProgress: Story = {
  args: {
    value: 70,
    color: "primary",
  },
};

export const SecondaryProgress: Story = {
  args: {
    value: 50,
    color: "secondary",
  },
};

export const AccentProgress: Story = {
  args: {
    value: 40,
    color: "accent",
  },
};

export const InfoProgress: Story = {
  args: {
    value: 60,
    color: "info",
  },
};

export const SuccessProgress: Story = {
  args: {
    value: 90,
    color: "success",
  },
};

export const WarningProgress: Story = {
  args: {
    value: 30,
    color: "warning",
  },
};

export const ErrorProgress: Story = {
  args: {
    value: 10,
    color: "error",
  },
};

export const LargePrimaryProgress: Story = {
  args: {
    value: 80,
    color: "primary",
    size: "lg",
  },
};

export const SmallSuccessProgress: Story = {
  args: {
    value: 95,
    color: "success",
    size: "sm",
  },
};
