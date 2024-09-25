import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputProps } from "../components/data-input"; // Ajusta la ruta según tu estructura de archivos

export default {
  title: "Data-Input/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
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
          null, // Opción para que no tenga color
        ],
      },
    },
    inputSize: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg"],
      },
    },
    bordered: {
      control: "boolean",
    },
    ghost: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    withBadge: {
      control: "boolean",
    },
  },
  args: {
    placeholder: "Type here",
    inputSize: "md", // Tamaño por defecto
    bordered: true,
    ghost: false,
    disabled: false,
    withBadge: false,
    type: "text",
  },
} as Meta<TextInputProps>;

type Story = StoryObj<TextInputProps>;

export const DefaultInput: Story = {
  args: {
    placeholder: "Type your name",
  },
};

export const InputWithBorder: Story = {
  args: {
    placeholder: "Type your email",
    bordered: true,
  },
};

export const PasswordInput: Story = {
  args: {
    placeholder: "Enter your password",
    type: "password",
  },
};

export const GhostInput: Story = {
  args: {
    placeholder: "Search something",
    ghost: true,
  },
};

export const InputWithIcon: Story = {
  args: {
    placeholder: "Search",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
};

export const InputWithTextLabel: Story = {
  args: {
    customLabel: "Name",
  },
};

export const InputWithBadge: Story = {
  args: {
    withBadge: true,
    badgeText: "Optional",
  },
};

export const PrimaryInput: Story = {
  args: {
    placeholder: "Primary input",
    color: "primary",
  },
};

export const SecondaryInput: Story = {
  args: {
    placeholder: "Secondary input",
    color: "secondary",
  },
};

export const AccentInput: Story = {
  args: {
    placeholder: "Accent input",
    color: "accent",
  },
};

export const InfoInput: Story = {
  args: {
    placeholder: "Info input",
    color: "info",
  },
};

export const SuccessInput: Story = {
  args: {
    placeholder: "Success input",
    color: "success",
  },
};

export const WarningInput: Story = {
  args: {
    placeholder: "Warning input",
    color: "warning",
  },
};

export const ErrorInput: Story = {
  args: {
    placeholder: "Error input",
    color: "error",
  },
};

export const LargeInput: Story = {
  args: {
    placeholder: "Large input",
    inputSize: "lg",
  },
};

export const SmallInput: Story = {
  args: {
    placeholder: "Small input",
    inputSize: "sm",
  },
};

export const ExtraSmallInput: Story = {
  args: {
    placeholder: "Tiny input",
    inputSize: "xs",
  },
};

export const DisabledInput: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};
