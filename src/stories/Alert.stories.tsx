import { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertProps } from "../components/feedback"; // Ajusta la ruta según tu estructura de archivos

export default {
  title: "Feedback/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["info", "success", "warning", "error"],
      },
    },
    message: {
      control: "text",
    },
    withButtons: {
      control: "boolean",
    },
  },
  args: {
    message: "This is an alert",
    type: "info",
    withButtons: false,
  },
} as Meta<AlertProps>;

type Story = StoryObj<AlertProps>;

export const InfoAlert: Story = {
  args: {
    message: "New software update available.",
    type: "info",
  },
};

export const SuccessAlert: Story = {
  args: {
    message: "Your purchase has been confirmed!",
    type: "success",
  },
};

export const WarningAlert: Story = {
  args: {
    message: "Warning: Invalid email address!",
    type: "warning",
  },
};

export const ErrorAlert: Story = {
  args: {
    message: "Error! Task failed successfully.",
    type: "error",
  },
};

export const AlertWithButtons: Story = {
  args: {
    message: "We use cookies for no reason.",
    type: "info",
    withButtons: true,
    onAccept: () => alert("Accepted!"),
    onDeny: () => alert("Denied!"),
  },
};
