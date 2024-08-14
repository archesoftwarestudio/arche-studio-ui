import { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableProps,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
} from "../components/data-display"; // Ajusta la ruta según tu estructura de archivos

export default {
  title: "Data-Display/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["zebra"],
      },
    },
    pinRows: {
      control: "boolean",
    },
    pinCols: {
      control: "boolean",
    },
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg"],
      },
    },
  },
  args: {
    variant: undefined,
    pinRows: false,
    pinCols: false,
    size: "md",
  },
} as Meta<TableProps>;

type Story = StoryObj<TableProps>;

export const Default: Story = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Age</TableHeaderCell>
            <TableHeaderCell>Country</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>30</TableCell>
            <TableCell>USA</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Doe</TableCell>
            <TableCell>25</TableCell>
            <TableCell>Canada</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};

export const Zebra: Story = {
  args: {
    ...Default.args,
    variant: "zebra",
  },
};

export const PinRows: Story = {
  args: {
    ...Default.args,
    pinRows: true,
  },
};

export const PinCols: Story = {
  args: {
    ...Default.args,
    pinCols: true,
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "lg",
  },
};

export const FullFeatures: Story = {
  args: {
    ...Default.args,
    variant: "zebra",
    pinRows: true,
    pinCols: true,
    size: "lg",
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Age</TableHeaderCell>
            <TableHeaderCell>Country</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>30</TableCell>
            <TableCell>USA</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Doe</TableCell>
            <TableCell>25</TableCell>
            <TableCell>Canada</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sam Smith</TableCell>
            <TableCell>40</TableCell>
            <TableCell>UK</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Alex Johnson</TableCell>
            <TableCell>35</TableCell>
            <TableCell>Australia</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};
