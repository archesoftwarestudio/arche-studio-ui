import type { Meta, StoryObj } from "@storybook/react";
import { TextArea, TextAreaProps } from "../components/data-input";

export default {
  title: "Data-Input/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    placeholder: "Enter text here",
  },
} as Meta;

type Story = StoryObj<TextAreaProps>;

export const Default: Story = {
  args: {
    initialValue: "Hello world!",
    onChange: (e) => console.log(e.target.value),
  },
};

export const Primary: Story = {
  args: {
    initialValue: "Hello world!",
    onChange: (e) => console.log(e.target.value),
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    initialValue: "Hello world!",
    onChange: (e) => console.log(e.target.value),
    variant: "secondary",
  },
};

export const Accent: Story = {
  args: {
    initialValue: "Hello world!",
    onChange: (e) => console.log(e.target.value),
    variant: "accent",
  },
};

export const Info: Story = {
  args: {
    initialValue: "Hello world!",
    onChange: (e) => console.log(e.target.value),
    variant: "info",
  },
};

export const Warning: Story = {
  args: {
    initialValue: "Hello world!",
    onChange: (e) => console.log(e.target.value),
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    initialValue: "Hello world!",
    onChange: (e) => console.log(e.target.value),
    variant: "error",
  },
};

export const Success: Story = {
  args: {
    initialValue: "Hello world!",
    onChange: (e) => console.log(e.target.value),
    variant: "success",
  },
};

export const Bordered: Story = {
  args: {
    initialValue: "Hello world!",
    onChange: (e) => console.log(e.target.value),
    border: true,
  },
};

export const Large: Story = {
  args: {
    initialValue: "Hello world!",
    onChange: (e) => console.log(e.target.value),
    size: "large",
  },
};

export const Medium: Story = {
  args: {
    initialValue: "Hello world!",
    onChange: (e) => console.log(e.target.value),
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    initialValue: "Hello world!",
    onChange: (e) => console.log(e.target.value),
    size: "small",
  },
};

export const ExtraSmall: Story = {
  args: {
    initialValue: "Hello world!",
    onChange: (e) => console.log(e.target.value),
    size: "extra-small",
  },
};
