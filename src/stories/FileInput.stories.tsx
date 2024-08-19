import { Meta, StoryObj } from "@storybook/react";
import { FileInput, FileInputProps } from "../components/data-input"; // Ajusta la ruta según tu estructura de archivos

export default {
  title: "Data-Input/FileInput",
  component: FileInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    inputSize: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg"],
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
    bordered: {
      control: "boolean",
    },
    ghost: {
      control: "boolean",
    },
    maxWidth: {
      control: {
        type: "select",
        options: ["max-w-xs", "max-w-sm", "max-w-md", "max-w-lg", "max-w-full"],
      },
    },
    disabled: {
      control: "boolean",
    },
    altLabel: {
      control: "text",
    },
  },
  args: {
    inputSize: "md",
    bordered: true,
    ghost: false,
    maxWidth: "max-w-xs",
  },
} as Meta<FileInputProps>;

type Story = StoryObj<FileInputProps>;

export const DefaultFileInput: Story = {
  args: {
    label: "Pick a file",
    inputSize: "md",
    bordered: true,
    ghost: false,
    color: "primary",
    maxWidth: "max-w-xs",
  },
};

export const GhostFileInput: Story = {
  args: {
    label: "Pick a file (Ghost)",
    inputSize: "lg",
    bordered: false,
    ghost: true,
    color: "secondary",
    maxWidth: "max-w-sm",
  },
};

export const SmallFileInput: Story = {
  args: {
    label: "Pick a small file",
    inputSize: "sm",
    bordered: true,
    ghost: false,
    color: "accent",
    maxWidth: "max-w-xs",
  },
};

export const ErrorFileInput: Story = {
  args: {
    label: "Upload file with error",
    inputSize: "md",
    bordered: true,
    ghost: false,
    color: "error",
    maxWidth: "max-w-xs",
  },
};

export const FullWidthFileInput: Story = {
  args: {
    label: "Full width file input",
    inputSize: "md",
    bordered: true,
    ghost: false,
    color: "info",
    maxWidth: "max-w-full",
  },
};

export const DisabledFileInput: Story = {
  args: {
    label: "Disabled input",
    inputSize: "md",
    bordered: true,
    ghost: false,
    color: "warning",
    maxWidth: "max-w-xs",
    disabled: true,
  },
};

export const FileInputWithAltLabel: Story = {
  args: {
    label: "Pick a file",
    altLabel: "Alt label",
    inputSize: "md",
    bordered: true,
    ghost: false,
    color: "primary",
    maxWidth: "max-w-xs",
  },
};
