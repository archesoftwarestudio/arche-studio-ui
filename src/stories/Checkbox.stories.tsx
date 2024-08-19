import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "../components/data-input"; // Ajusta la ruta según tu estructura de archivos

export default {
  title: "Forms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "fullscreen", // Para que ocupe todo el ancho
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
          "success",
          "warning",
          "info",
          "error",
        ],
      },
    },
    checkboxSize: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg"], // Controlamos el tamaño del checkbox
      },
    },
    indeterminate: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    containerWidth: {
      control: {
        type: "select",
        options: ["w-full", "w-1/2", "w-1/3", "w-1/4", "w-auto"], // Controlamos el ancho del contenedor
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="mx-20">
        <Story />
      </div>
    ),
  ],
} as Meta<CheckboxProps>;

type Story = StoryObj<CheckboxProps>;

// Stories para tamaños de checkbox
export const SmallCheckbox: Story = {
  args: {
    label: "Small checkbox",
    color: "primary",
    checkboxSize: "sm", // Tamaño pequeño
    checked: true,
    containerWidth: "w-full",
  },
};

export const MediumCheckbox: Story = {
  args: {
    label: "Medium checkbox",
    color: "primary",
    checkboxSize: "md", // Tamaño mediano
    checked: true,
    containerWidth: "w-full",
  },
};

export const LargeCheckbox: Story = {
  args: {
    label: "Large checkbox",
    color: "primary",
    checkboxSize: "lg", // Tamaño grande
    checked: true,
    containerWidth: "w-full",
  },
};

// Stories para anchos del contenedor
export const FullWidthContainer: Story = {
  args: {
    label: "Full width container",
    color: "primary",
    checkboxSize: "md",
    checked: true,
    containerWidth: "w-full", // El contenedor ocupa todo el ancho
  },
};

export const HalfWidthContainer: Story = {
  args: {
    label: "Half width container",
    color: "secondary",
    checkboxSize: "md",
    checked: false,
    containerWidth: "w-1/2", // El contenedor ocupa la mitad del ancho
  },
};

export const ThirdWidthContainer: Story = {
  args: {
    label: "One-third width container",
    color: "accent",
    checkboxSize: "md",
    checked: true,
    containerWidth: "w-1/3", // El contenedor ocupa un tercio del ancho
  },
};

export const QuarterWidthContainer: Story = {
  args: {
    label: "One-quarter width container",
    color: "primary",
    checkboxSize: "md",
    checked: true,
    containerWidth: "w-1/4", // El contenedor ocupa un cuarto del ancho
  },
};

// Story sin label
export const CheckboxWithoutLabel: Story = {
  args: {
    color: "primary",
    checkboxSize: "md",
    checked: true,
    containerWidth: "w-full",
  },
};

// Story con estado indeterminado
export const IndeterminateCheckbox: Story = {
  args: {
    label: "Select all",
    indeterminate: true,
    checked: false,
    containerWidth: "w-full",
  },
};
