import { Meta, StoryObj } from "@storybook/react";
import { RatingInput, RatingInputProps } from "../components/data-input"; // Ajusta la ruta según tu estructura de archivos

export default {
  title: "Data-Input/RatingInput",
  component: RatingInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg"],
      },
    },
    half: {
      control: "boolean",
    },
    hidden: {
      control: "boolean",
    },
    shape: {
      control: {
        type: "select",
        options: ["star", "heart"], // Solo se permiten "star" y "heart"
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
        ], // Colores de DaisyUI
      },
    },
    disabled: {
      control: "boolean",
    },
    max: {
      control: { type: "number", min: 1, max: 10, step: 1 },
    },
    value: {
      control: { type: "number", min: 0, max: 5, step: 0.5 },
    },
  },
  args: {
    value: 3,
    max: 5,
    size: "md",
    half: false,
    hidden: false,
    shape: "star",
    color: "primary",
    disabled: false,
  },
} as Meta<RatingInputProps>;

type Story = StoryObj<RatingInputProps>;

export const DefaultRating: Story = {
  args: {
    value: 3,
  },
};

export const HalfRating: Story = {
  args: {
    value: 2.5,
    half: true,
  },
};

export const HiddenRating: Story = {
  args: {
    value: 3,
    hidden: true,
  },
};

export const CustomShapeRating: Story = {
  args: {
    value: 3,
    shape: "heart",
    color: "accent",
  },
};

export const StarRatingWithPrimaryColor: Story = {
  args: {
    value: 4,
    shape: "star",
    color: "success",
  },
};

export const LargeRating: Story = {
  args: {
    value: 4,
    size: "lg",
  },
};

export const SmallRating: Story = {
  args: {
    value: 3,
    size: "sm",
  },
};

export const ExtraSmallRating: Story = {
  args: {
    value: 2,
    size: "xs",
  },
};

export const DisabledRating: Story = {
  args: {
    value: 4,
    disabled: true,
  },
};
