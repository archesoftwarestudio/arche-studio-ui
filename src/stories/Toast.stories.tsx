import { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastProps } from "../components/feedback"; // Ajusta la ruta según tu estructura de archivos

export default {
  title: "Feedback/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: {
        type: "select",
        options: [
          "top-start",
          "top-center",
          "top-end",
          "middle-start",
          "middle-center",
          "middle-end",
          "bottom-start",
          "bottom-center",
          "bottom-end",
        ],
      },
    },
  },
  args: {
    position: "bottom-end",
    alerts: [
      { message: "New mail arrived.", type: "info" },
      { message: "Message sent successfully.", type: "success" },
    ],
  },
} as Meta<ToastProps>;

type Story = StoryObj<ToastProps>;

export const BottomEndToast: Story = {
  args: {
    position: "bottom-end",
    alerts: [
      { message: "New mail arrived.", type: "info" },
      { message: "Message sent successfully.", type: "success" },
    ],
  },
};

export const TopStartToast: Story = {
  args: {
    position: "top-start",
    alerts: [
      { message: "New message arrived.", type: "info" },
      { message: "Error occurred.", type: "error" },
    ],
  },
};

export const MiddleCenterToast: Story = {
  args: {
    position: "middle-center",
    alerts: [
      { message: "Update available.", type: "info" },
      { message: "Changes saved successfully.", type: "success" },
    ],
  },
};

export const WarningToast: Story = {
  args: {
    position: "bottom-center",
    alerts: [
      { message: "Check your connection!", type: "warning" },
      { message: "New message arrived.", type: "info" },
    ],
  },
};
