import { Meta, StoryObj } from "@storybook/react";
import { Textarea, TextareaProps } from "../components/data-input"; // Adjust path to your file structure

export default {
  title: "Data-Input/Textarea",
  component: Textarea,
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
        ],
      },
    },
    size: {
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
  },
  args: {
    color: undefined,
    size: "md",
    bordered: false,
    ghost: false,
    disabled: false,
  },
} as Meta<TextareaProps>;

type Story = StoryObj<TextareaProps>;

export const DefaultTextarea: Story = {
  args: {
    placeholder: "Bio",
  },
};

export const TextareaWithBorder: Story = {
  args: {
    placeholder: "Bio",
    bordered: true,
  },
};

export const GhostTextarea: Story = {
  args: {
    placeholder: "Bio",
    ghost: true,
  },
};

export const PrimaryColorTextarea: Story = {
  args: {
    placeholder: "Bio",
    color: "primary",
  },
};

export const SecondaryColorTextarea: Story = {
  args: {
    placeholder: "Bio",
    color: "secondary",
  },
};

export const AccentColorTextarea: Story = {
  args: {
    placeholder: "Bio",
    color: "accent",
  },
};

export const InfoColorTextarea: Story = {
  args: {
    placeholder: "Bio",
    color: "info",
  },
};

export const SuccessColorTextarea: Story = {
  args: {
    placeholder: "Bio",
    color: "success",
  },
};

export const WarningColorTextarea: Story = {
  args: {
    placeholder: "Bio",
    color: "warning",
  },
};

export const ErrorColorTextarea: Story = {
  args: {
    placeholder: "Bio",
    color: "error",
  },
};

export const ExtraSmallTextarea: Story = {
  args: {
    placeholder: "Bio",
    size: "xs",
    bordered: true,
  },
};

export const SmallTextarea: Story = {
  args: {
    placeholder: "Bio",
    size: "sm",
    bordered: true,
  },
};

export const MediumTextarea: Story = {
  args: {
    placeholder: "Bio",
    size: "md",
    bordered: true,
  },
};

export const LargeTextarea: Story = {
  args: {
    placeholder: "Bio",
    size: "lg",
    bordered: true,
  },
};

export const DisabledTextarea: Story = {
  args: {
    placeholder: "Bio",
    disabled: true,
  },
};
