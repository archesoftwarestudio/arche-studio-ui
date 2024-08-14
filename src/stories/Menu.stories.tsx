import { Meta, StoryObj } from "@storybook/react";
import { Menu, MenuProps, MenuItem } from "../components/navigation"; // Ajusta la ruta según tu estructura de archivos
import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaEnvelope,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa"; // Importa los íconos desde react-icons

export default {
  title: "Navigation/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    horizontal: {
      control: "boolean",
    },
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg"],
      },
    },
    bgColor: {
      control: {
        type: "select",
        options: ["base-100", "base-200", "base-300", "neutral"],
      },
    },
    rounded: {
      control: {
        type: "select",
        options: [
          "rounded-none",
          "rounded-sm",
          "rounded-md",
          "rounded-lg",
          "rounded-box",
        ],
      },
    },
    width: {
      control: {
        type: "select",
        options: ["w-32", "w-48", "w-56", "w-64"],
      },
    },
  },
  args: {
    title: "Menu Title",
    horizontal: false,
    size: "md",
    bgColor: "base-100",
    rounded: "rounded-box",
    width: "w-56",
  },
} as Meta<MenuProps>;

type Story = StoryObj<MenuProps>;

export const VerticalMenu: Story = {
  args: {
    items: [
      { label: "Home", icon: <FaHome />, active: true },
      { label: "About", icon: <FaInfoCircle /> },
      {
        label: "Services",
        icon: <FaCogs />,
        submenu: (
          <>
            <MenuItem label="Web Design" />
            <MenuItem label="Development" />
          </>
        ),
      },
      { label: "Contact", icon: <FaEnvelope />, disabled: true },
    ],
  },
};

export const HorizontalMenuWithoutWidth: Story = {
  args: {
    horizontal: true,
    size: "md",
    bgColor: "base-100",
    rounded: "rounded-box",
    items: [
      { label: "Home", icon: <FaHome />, active: true },
      { label: "About", icon: <FaInfoCircle /> },
      {
        label: "Services",
        icon: <FaCogs />,
        submenu: (
          <>
            <MenuItem label="Web Design" />
            <MenuItem label="Development" />
          </>
        ),
      },
      { label: "Contact", icon: <FaEnvelope />, disabled: true },
    ],
  },
};

export const VerticalMenuWithWidth: Story = {
  args: {
    horizontal: false,
    size: "lg",
    bgColor: "base-200",
    rounded: "rounded-lg",
    width: "w-64",
    items: [
      { label: "Home", icon: <FaHome />, active: true },
      { label: "About", icon: <FaInfoCircle /> },
      {
        label: "Services",
        icon: <FaCogs />,
        submenu: (
          <>
            <MenuItem label="Web Design" />
            <MenuItem label="Development" />
          </>
        ),
      },
      { label: "Contact", icon: <FaEnvelope />, disabled: true },
    ],
  },
};

export const MenuWithPredefinedStyles: Story = {
  args: {
    title: "Custom Menu",
    size: "lg",
    bgColor: "base-200",
    rounded: "rounded-lg",
    width: "w-64",
    items: [
      { label: "Home", icon: <FaHome />, active: true },
      { label: "About", icon: <FaInfoCircle /> },
      {
        label: "Services",
        icon: <FaCogs />,
        submenu: (
          <>
            <MenuItem label="Web Design" />
            <MenuItem label="Development" />
          </>
        ),
      },
      { label: "Contact", icon: <FaEnvelope />, disabled: true },
    ],
  },
};

export const MenuWithIconsAndCustomStyles: Story = {
  args: {
    size: "md",
    bgColor: "base-300",
    rounded: "rounded-box",
    width: "w-48",
    items: [
      { label: "Dashboard", icon: <FaHome />, active: true },
      { label: "Settings", icon: <FaCogs /> },
      {
        label: "Profile",
        icon: <FaUser />,
        submenu: (
          <>
            <MenuItem label="Account" />
            <MenuItem label="Privacy" />
          </>
        ),
      },
      { label: "Logout", icon: <FaSignOutAlt />, disabled: true },
    ],
  },
};

export const MenuWithSubmenu: Story = {
  args: {
    items: [
      {
        label: "Parent",
        submenu: (
          <>
            <MenuItem label="Child 1" />
            <MenuItem label="Child 2" />
          </>
        ),
      },
    ],
  },
};
