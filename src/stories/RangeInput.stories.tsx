import { Meta, StoryObj } from "@storybook/react";
import { RangeInput, RangeInputProps } from "../components/data-input"; // Ajusta la ruta según tu estructura de archivos

export default {
  title: "Data-Input/RangeInput",
  component: RangeInput,
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
    color: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "accent",
          "success",
          "warning",
          "info",
          "error",
        ],
      },
    },
    customColor: {
      control: "text",
    },
    showSteps: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    size: "md",
    color: "primary",
    disabled: false,
    min: 0,
    max: 100,
    step: 25,
    showSteps: false,
  },
} as Meta<RangeInputProps>;

type Story = StoryObj<RangeInputProps>;

export const DefaultRange: Story = {
  args: {
    value: 40,
  },
};

export const RangeWithSteps: Story = {
  args: {
    value: 25,
    showSteps: true,
  },
};

export const PrimaryRange: Story = {
  args: {
    color: "primary",
    value: 40,
  },
};

export const SecondaryRange: Story = {
  args: {
    color: "secondary",
    value: 40,
  },
};

export const AccentRange: Story = {
  args: {
    color: "accent",
    value: 40,
  },
};

export const SuccessRange: Story = {
  args: {
    color: "success",
    value: 40,
  },
};

export const WarningRange: Story = {
  args: {
    color: "warning",
    value: 40,
  },
};

export const InfoRange: Story = {
  args: {
    color: "info",
    value: 40,
  },
};

export const ErrorRange: Story = {
  args: {
    color: "error",
    value: 40,
  },
};

export const LargeRange: Story = {
  args: {
    size: "lg",
    value: 70,
  },
};

export const SmallRange: Story = {
  args: {
    size: "sm",
    value: 50,
  },
};

export const ExtraSmallRange: Story = {
  args: {
    size: "xs",
    value: 40,
  },
};

export const CustomColorRange: Story = {
  args: {
    customColor: "yellow",
    value: 40,
  },
};

export const DisabledRange: Story = {
  args: {
    disabled: true,
    value: 40,
  },
};
