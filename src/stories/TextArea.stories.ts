import type { Meta, StoryObj } from "@storybook/react";
import { TextArea, TextAreaProps } from "../components/data-input";

export default {
  title: "Data-Input/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "",
        "primary",
        "secondary",
        "accent",
        "info",
        "success",
        "warning",
        "error",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["lg", "md", "sm", "xs"],
    },
    border: {
      control: { type: "boolean" },
    },
    ghost: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    readOnly: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
    placeholder: {
      control: { type: "text" },
    },
    label: {
      control: { type: "text" },
    },
  },
  args: {
    variant: "", // Por defecto sin variante
    size: "md",
    border: false, // Estilo por defecto sin bordes
    ghost: false,
    disabled: false,
    readOnly: false,
    required: false,
    placeholder: "Enter text...",
  },
} as Meta<TextAreaProps>;

type Story = StoryObj<TextAreaProps>;

export const Default: Story = {
  args: {
    variant: "",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "xs",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Text Area Label",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Ghost: Story = {
  args: {
    ghost: true,
    border: false, // Aseguramos que border está desactivado con ghost
  },
};

export const SuccessVariant: Story = {
  args: {
    variant: "success",
    border: true,
  },
};

export const ErrorVariant: Story = {
  args: {
    variant: "error",
    border: true,
  },
};

export const WarningVariant: Story = {
  args: {
    variant: "warning",
    border: true,
  },
};
