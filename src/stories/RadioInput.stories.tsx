import { Meta, StoryObj } from "@storybook/react";
import { RadioInput, RadioInputProps } from "../components/data-input"; // Ajusta la ruta según tu estructura de archivos

export default {
  title: "Data-Input/RadioInput",
  component: RadioInput,
  parameters: {
    layout: "fullscreen",
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
          "info",
          "success",
          "warning",
          "error",
        ],
      },
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    size: "md",
    color: "primary",
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div className="mx-20">
        <Story />
      </div>
    ),
  ],
} as Meta<RadioInputProps>;

type Story = StoryObj<RadioInputProps>;

export const DefaultRadio: Story = {
  args: {
    name: "radioGroup1",
    checked: true,
  },
};

export const PrimaryRadio: Story = {
  args: {
    name: "radioGroup2",
    color: "primary",
    checked: true,
  },
};

export const SecondaryRadio: Story = {
  args: {
    name: "radioGroup3",
    color: "secondary",
  },
};

export const AccentRadio: Story = {
  args: {
    name: "radioGroup4",
    color: "accent",
  },
};

export const SuccessRadio: Story = {
  args: {
    name: "radioGroup5",
    color: "success",
    checked: true,
  },
};

export const WarningRadio: Story = {
  args: {
    name: "radioGroup6",
    color: "warning",
  },
};

export const InfoRadio: Story = {
  args: {
    name: "radioGroup7",
    color: "info",
    checked: true,
  },
};

export const ErrorRadio: Story = {
  args: {
    name: "radioGroup8",
    color: "error",
  },
};

export const DisabledRadio: Story = {
  args: {
    name: "radioGroup9",
    disabled: true,
    checked: true,
  },
};

export const SmallRadio: Story = {
  args: {
    name: "radioGroup10",
    size: "sm",
    color: "primary",
  },
};

export const LargeRadio: Story = {
  args: {
    name: "radioGroup11",
    size: "lg",
    color: "success",
  },
};

export const ExtraSmallRadio: Story = {
  args: {
    name: "radioGroup12",
    size: "xs",
    color: "accent",
  },
};

export const CustomContainerWidth: Story = {
  args: {
    name: "radioGroup13",
    color: "primary",
    containerWidth: "w-full",
    label: "Custom Width",
  },
};
