import { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs, BreadcrumbsProps } from "../components/navigation";

export default {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    className: { control: "text" },
    textSize: { control: "text" },
  },
} as Meta<BreadcrumbsProps>;

type Story = StoryObj<BreadcrumbsProps>;

export const DefaultBreadcrumbs: Story = {
  args: {
    items: [
      { label: "Home", onClick: () => alert("Navigate to Home") },
      { label: "Documents", onClick: () => alert("Navigate to Documents") },
      { label: "Add Document", active: true },
    ],
  },
};

export const BreadcrumbsWithIcons: Story = {
  args: {
    items: [
      {
        label: "Home",
        onClick: () => alert("Navigate to Home"),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-4 w-4 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            ></path>
          </svg>
        ),
      },
      {
        label: "Documents",
        onClick: () => alert("Navigate to Documents"),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-4 w-4 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            ></path>
          </svg>
        ),
      },
      {
        label: "Add Document",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-4 w-4 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
        ),
        active: true,
      },
    ],
  },
};

export const BreadcrumbsMaxWidth: Story = {
  args: {
    items: [
      { label: "Long text 1", onClick: () => alert("Navigate to Long text 1") },
      { label: "Long text 2", onClick: () => alert("Navigate to Long text 2") },
      { label: "Long text 3", onClick: () => alert("Navigate to Long text 3") },
      { label: "Long text 4", onClick: () => alert("Navigate to Long text 4") },
      { label: "Long text 5", active: true },
    ],
    className: "max-w-xs",
  },
};
