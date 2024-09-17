import type { Meta, StoryObj } from "@storybook/react";
import { Modal, ModalProps } from "../components/actions";

export default {
  title: "Actions/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    isOpen: true,
    onClose: () => alert("Modal closed!"),
    children: (
      <div>
        <h3 className="font-bold text-lg">Congratulations!</h3>
        <p className="py-4">You've successfully created a Modal component.</p>
      </div>
    ),
    showCloseButton: true,
    closeOnOverlayClick: true,
  },
} as Meta;

type Story = StoryObj<ModalProps>;

export const Default: Story = {
  args: {
    size: "default",
    position: "middle",
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

export const BottomPosition: Story = {
  args: {
    position: "bottom",
  },
};

export const NoCloseOnOverlayClick: Story = {
  args: {
    closeOnOverlayClick: false,
  },
};

export const NoCloseButton: Story = {
  args: {
    showCloseButton: false,
  },
};

export const WithActions: Story = {
  args: {
    showActions: true,
    actions: (
      <>
        <button className="btn">Confirm</button>
        <button
          className="btn btn-ghost"
          onClick={() => alert("Action cancelled!")}
        >
          Cancel
        </button>
      </>
    ),
  },
};
