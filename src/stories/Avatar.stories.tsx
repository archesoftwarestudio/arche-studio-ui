import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "../components/data-display";

export default {
  title: "Data-Display/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    shape: {
      control: { type: "select" },
      options: ["circle", "square", "rounded"],
    },
    border: { control: "boolean" },
    status: {
      control: { type: "select" },
      options: ["online", "offline", undefined],
    },
  },
  args: {
    src: "https://avatars.githubusercontent.com/u/118936041?v=4",
    alt: "SnifferSixxx",
    size: "medium",
    shape: "circle",
    border: false,
    status: undefined,
  },
} as Meta;

type Story = StoryObj<AvatarProps>;

export const Default: Story = {
  args: {
    size: "medium",
    shape: "circle",
    border: false,
    status: undefined,
  },
};

export const SmallSize: Story = {
  args: {
    size: "small",
  },
};

export const LargeSize: Story = {
  args: {
    size: "large",
  },
};

export const SquareShape: Story = {
  args: {
    shape: "square",
  },
};

export const RoundedShape: Story = {
  args: {
    shape: "rounded",
  },
};

export const WithBorder: Story = {
  args: {
    border: true,
  },
};

export const OnlineStatus: Story = {
  args: {
    status: "online",
  },
};

export const OfflineStatus: Story = {
  args: {
    status: "offline",
  },
};
