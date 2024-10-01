import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown, DropdownProps } from "../components/actions";
import { MdMoreHoriz } from "react-icons/md";

export default {
  title: "Actions/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: { control: "text" },
  },
  args: {
    label: "Dropdown",
    items: [
      { text: "Item 1", onClick: () => alert("Clicked Item 1!") },
      { text: "Item 2", onClick: () => alert("Clicked Item 2!") },
      { text: "Item 3", onClick: () => alert("Clicked Item 3!") },
    ],
    shadow: true,
    rounded: true,
  },
} as Meta;

type Story = StoryObj<DropdownProps>;

export const Default: Story = {
  args: {
    position: "bottom", // Posición por defecto
  },
};

export const Icon: Story = {
  args: {
    position: "bottom",
    label: "",
    icon: <MdMoreHoriz />,
  },
};

export const TopPosition: Story = {
  args: {
    position: "top",
  },
};

export const RightPosition: Story = {
  args: {
    position: "right",
  },
};

export const LeftPosition: Story = {
  args: {
    position: "left",
  },
};

export const Hoverable: Story = {
  args: {
    hover: true,
  },
};

export const Focusable: Story = {
  args: {
    focus: true,
  },
};

export const Compact: Story = {
  args: {
    compact: true,
  },
};

export const EndAligned: Story = {
  args: {
    end: true,
  },
};

export const NoShadow: Story = {
  args: {
    shadow: false,
  },
};

export const NoRounded: Story = {
  args: {
    rounded: false,
  },
};
