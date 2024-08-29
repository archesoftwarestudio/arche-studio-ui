import { Meta, StoryObj } from "@storybook/react";
import { Menu, MenuProps } from "../components/navigation";
import { MdHome, MdInfo, MdBarChart, MdMail, MdUpdate } from "react-icons/md";

export default {
  title: "Navigation/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<MenuProps>;

type Story = StoryObj<MenuProps>;

export const DefaultMenu: Story = {
  args: {
    items: [{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }],
  },
};

export const ResponsiveMenu: Story = {
  args: {
    items: [{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }],
    responsive: true,
    layout: "horizontal",
  },
};

export const MenuWithIcons: Story = {
  args: {
    items: [
      {
        label: "Home",
        icon: <MdHome />,
      },
      {
        label: "Details",
        icon: <MdInfo />,
      },
      {
        label: "Stats",
        icon: <MdBarChart />,
      },
    ],
  },
};

export const MenuWithIconsHorizontal: Story = {
  args: {
    items: [
      {
        label: "Home",
        icon: <MdHome />,
      },
      {
        label: "Details",
        icon: <MdInfo />,
      },
      {
        label: "Stats",
        icon: <MdBarChart />,
      },
    ],
    layout: "horizontal",
  },
};

export const MenuWithTooltips: Story = {
  args: {
    items: [
      {
        label: "Home",
        icon: <MdHome />,
        tooltip: "Home",
      },
      {
        label: "Details",
        icon: <MdInfo />,
        tooltip: "Details",
      },
      {
        label: "Stats",
        icon: <MdBarChart />,
        tooltip: "Stats",
      },
    ],
  },
};

export const MenuWithIconsAndBadges: Story = {
  args: {
    items: [
      {
        label: "Inbox",
        icon: <MdMail />,
        badge: "99+",
        badgeType: "info", // Info badge con ícono
      },
      {
        label: "Updates",
        icon: <MdUpdate />,
        badge: "NEW",
        badgeType: "success", // Success badge con ícono
      },
      {
        label: "Stats",
        icon: <MdBarChart />,
        badge: "!",
        badgeType: "warning", // Warning badge con ícono
      },
      {
        label: "Errors",
        icon: <MdBarChart />,
        badge: "ERR",
        badgeType: "error", // Error badge con ícono
      },
    ],
  },
};

export const MenuSizes: Story = {
  args: {
    items: [{ label: "xs item 1" }, { label: "xs item 2" }],
    size: "menu-xs",
  },
};

export const MenuWithDisabledItems: Story = {
  args: {
    items: [
      { label: "Enabled item" },
      { label: "Disabled item", disabled: true },
    ],
  },
};

export const MenuWithTitle: Story = {
  args: {
    title: "Title",
    items: [{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }],
  },
};

export const Submenu: Story = {
  args: {
    items: [
      { label: "Item 1" },
      {
        label: "Item 2",
        submenu: [
          { label: "Subitem 1" },
          { label: "Subitem 2" },
          {
            label: "Submenu 1",
            submenu: [{ label: "Subitem 1" }, { label: "Subitem 2" }],
          },
        ],
      },
      { label: "Item 3" },
    ],
    showSubmenu: true,
  },
};

export const CollapsibleSubmenu: Story = {
  args: {
    items: [
      { label: "Item 1" },
      {
        label: "Item 2",
        submenu: [
          { label: "Subitem 1" },
          { label: "Subitem 2" },
          {
            label: "Submenu 1",
            submenu: [{ label: "Subitem 1" }, { label: "Subitem 2" }],
          },
        ],
      },
      { label: "Item 3" },
    ],
    collapsible: true,
  },
};

export const MenuWithActiveItem: Story = {
  args: {
    items: [
      { label: "Item 1", active: false },
      { label: "Item 2", active: true }, // Item activo
      { label: "Item 3", active: false },
    ],
  },
};

export const HorizontalMenu: Story = {
  args: {
    items: [{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }],
    layout: "horizontal",
  },
};

export const HorizontalSubmenu: Story = {
  args: {
    items: [
      { label: "Item 1" },
      {
        label: "Parent",
        submenu: [{ label: "Submenu 1" }, { label: "Submenu 2" }],
      },
      { label: "Item 3" },
    ],
    layout: "horizontal",
    showSubmenu: true,
  },
};

export const MegaMenu: Story = {
  args: {
    items: [
      {
        label: "Solutions",
        submenu: [
          { label: "Design" },
          { label: "Development" },
          { label: "Hosting" },
          { label: "Domain register" },
        ],
      },
      {
        label: "Enterprise",
        submenu: [
          { label: "CRM software" },
          { label: "Marketing management" },
          { label: "Security" },
          { label: "Consulting" },
        ],
      },
      {
        label: "Products",
        submenu: [
          { label: "UI Kit" },
          { label: "Wordpress themes" },
          { label: "Wordpress plugins" },
          {
            label: "Open source",
            submenu: [
              { label: "Auth management system" },
              { label: "VScode theme" },
              { label: "Color picker app" },
            ],
          },
        ],
      },
      {
        label: "Company",
        submenu: [
          { label: "About us" },
          { label: "Contact us" },
          { label: "Privacy policy" },
          { label: "Press kit" },
        ],
      },
    ],
    layout: "mega", // Nuevo modo mega
  },
};
