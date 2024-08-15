import { Meta, StoryObj } from "@storybook/react";
import { Pagination, PaginationProps } from "../components/navigation"; // Ajusta la ruta según tu estructura de archivos

export default {
  title: "Navigation/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      control: { type: "number", min: 1, max: 10, step: 1 },
    },
    totalPages: {
      control: { type: "number", min: 1, max: 10, step: 1 },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "accent", "ghost"],
      },
    },
    showIcons: {
      control: "boolean",
    },
    disablePrev: {
      control: "boolean",
    },
    disableNext: {
      control: "boolean",
    },
    join: {
      control: "boolean",
    },
  },
  args: {
    currentPage: 1,
    totalPages: 5,
    size: "md",
    variant: "primary",
    showIcons: false,
    disablePrev: false,
    disableNext: false,
    join: false,
  },
} as Meta<PaginationProps>;

type Story = StoryObj<PaginationProps>;

export const DefaultPagination: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    onPageChange: (page: number) => alert(`Changed to page ${page}`),
  },
};

export const PaginationWithLargeSize: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
    size: "lg",
    onPageChange: (page: number) => alert(`Changed to page ${page}`),
  },
};

export const PaginationWithIconsEnabled: Story = {
  args: {
    currentPage: 1,
    totalPages: 3,
    showIcons: true,
    onPageChange: (page: number) => alert(`Changed to page ${page}`),
  },
};

export const PaginationWithSecondaryVariant: Story = {
  args: {
    currentPage: 3,
    totalPages: 5,
    variant: "secondary",
    onPageChange: (page: number) => alert(`Changed to page ${page}`),
  },
};

export const PaginationWithDisabledNext: Story = {
  args: {
    currentPage: 5,
    totalPages: 5,
    disableNext: true,
    onPageChange: (page: number) => alert(`Changed to page ${page}`),
  },
};

export const PaginationWithJoinButtons: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
    join: true,
    onPageChange: (page: number) => alert(`Changed to page ${page}`),
  },
};

export const PaginationWithGapBetweenButtons: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
    join: false, // Explicitamente no unir los botones
    onPageChange: (page: number) => alert(`Changed to page ${page}`),
  },
};
