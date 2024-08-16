import { Meta, StoryObj } from "@storybook/react";
import { Loading, LoadingProps } from "../components/feedback"; // Ajusta la ruta según tu estructura de archivos

export default {
  title: "Feedback/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["spinner", "dots", "ring", "ball", "bars"],
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
          "neutral",
          "info",
          "success",
          "warning",
          "error",
        ],
      },
    },
  },
  args: {
    type: "spinner",
    size: "md",
    color: "primary",
  },
} as Meta<LoadingProps>;

type Story = StoryObj<LoadingProps>;

export const SpinnerLoading: Story = {
  args: {
    type: "spinner",
    color: "primary",
  },
};

export const DotsLoading: Story = {
  args: {
    type: "dots",
    color: "secondary",
  },
};

export const RingLoading: Story = {
  args: {
    type: "ring",
    color: "accent",
  },
};

export const BallLoading: Story = {
  args: {
    type: "ball",
    color: "info",
  },
};

export const BarsLoading: Story = {
  args: {
    type: "bars",
    color: "success",
  },
};

export const WarningSpinnerLoading: Story = {
  args: {
    type: "spinner",
    color: "warning",
  },
};

export const ErrorBallLoading: Story = {
  args: {
    type: "ball",
    color: "error",
  },
};
