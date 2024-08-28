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
    items: [
      { label: "Item 1", href: "#" },
      { label: "Item 2", href: "#" },
      { label: "Item 3", href: "#" },
    ],
  },
};

export const ResponsiveMenu: Story = {
  args: {
    items: [
      { label: "Item 1", href: "#" },
      { label: "Item 2", href: "#" },
      { label: "Item 3", href: "#" },
    ],
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
        href: "#",
      },
      {
        label: "Details",
        icon: <MdInfo />,
        href: "#",
      },
      {
        label: "Stats",
        icon: <MdBarChart />,
        href: "#",
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
        href: "#",
      },
      {
        label: "Details",
        icon: <MdInfo />,
        href: "#",
      },
      {
        label: "Stats",
        icon: <MdBarChart />,
        href: "#",
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
        href: "#",
        tooltip: "Home",
      },
      {
        label: "Details",
        icon: <MdInfo />,
        href: "#",
        tooltip: "Details",
      },
      {
        label: "Stats",
        icon: <MdBarChart />,
        href: "#",
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
        href: "#",
      },
      {
        label: "Updates",
        icon: <MdUpdate />,
        badge: "NEW",
        badgeType: "success", // Success badge con ícono
        href: "#",
      },
      {
        label: "Stats",
        icon: <MdBarChart />,
        badge: "!",
        badgeType: "warning", // Warning badge con ícono
        href: "#",
      },
      {
        label: "Errors",
        icon: <MdBarChart />,
        badge: "ERR",
        badgeType: "error", // Error badge con ícono
        href: "#",
      },
    ],
  },
};

export const MenuSizes: Story = {
  args: {
    items: [
      { label: "xs item 1", href: "#" },
      { label: "xs item 2", href: "#" },
    ],
    size: "menu-xs",
  },
};

export const MenuWithDisabledItems: Story = {
  args: {
    items: [
      { label: "Enabled item", href: "#" },
      { label: "Disabled item", href: "#", disabled: true },
    ],
  },
};

export const MenuWithTitle: Story = {
  args: {
    title: "Title",
    items: [
      { label: "Item 1", href: "#" },
      { label: "Item 2", href: "#" },
      { label: "Item 3", href: "#" },
    ],
  },
};

export const Submenu: Story = {
  args: {
    items: [
      { label: "Item 1", href: "#" },
      {
        label: "Item 2",
        submenu: [
          { label: "Subitem 1", href: "#" },
          { label: "Subitem 2", href: "#" },
          {
            label: "Submenu 1",
            submenu: [
              { label: "Subitem 1", href: "#" },
              { label: "Subitem 2", href: "#" },
            ],
          },
        ],
      },
      { label: "Item 3", href: "#" },
    ],
    showSubmenu: true,
  },
};

export const CollapsibleSubmenu: Story = {
  args: {
    items: [
      { label: "Item 1", href: "#" },
      {
        label: "Item 2",
        submenu: [
          { label: "Subitem 1", href: "#" },
          { label: "Subitem 2", href: "#" },
          {
            label: "Submenu 1",
            submenu: [
              { label: "Subitem 1", href: "#" },
              { label: "Subitem 2", href: "#" },
            ],
          },
        ],
      },
      { label: "Item 3", href: "#" },
    ],
    collapsible: true,
  },
};

export const MenuWithActiveItem: Story = {
  args: {
    items: [
      { label: "Item 1", href: "#", active: false },
      { label: "Item 2", href: "#", active: true }, // Item activo
      { label: "Item 3", href: "#", active: false },
    ],
  },
};

export const HorizontalMenu: Story = {
  args: {
    items: [
      { label: "Item 1", href: "#" },
      { label: "Item 2", href: "#" },
      { label: "Item 3", href: "#" },
    ],
    layout: "horizontal",
  },
};

export const HorizontalSubmenu: Story = {
  args: {
    items: [
      { label: "Item 1", href: "#" },
      {
        label: "Parent",
        submenu: [
          { label: "Submenu 1", href: "#" },
          { label: "Submenu 2", href: "#" },
        ],
      },
      { label: "Item 3", href: "#" },
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
          { label: "Design", href: "#" },
          { label: "Development", href: "#" },
          { label: "Hosting", href: "#" },
          { label: "Domain register", href: "#" },
        ],
      },
      {
        label: "Enterprise",
        submenu: [
          { label: "CRM software", href: "#" },
          { label: "Marketing management", href: "#" },
          { label: "Security", href: "#" },
          { label: "Consulting", href: "#" },
        ],
      },
      {
        label: "Products",
        submenu: [
          { label: "UI Kit", href: "#" },
          { label: "Wordpress themes", href: "#" },
          { label: "Wordpress plugins", href: "#" },
          {
            label: "Open source",
            submenu: [
              { label: "Auth management system", href: "#" },
              { label: "VScode theme", href: "#" },
              { label: "Color picker app", href: "#" },
            ],
          },
        ],
      },
      {
        label: "Company",
        submenu: [
          { label: "About us", href: "#" },
          { label: "Contact us", href: "#" },
          { label: "Privacy policy", href: "#" },
          { label: "Press kit", href: "#" },
        ],
      },
    ],
    layout: "mega", // Nuevo modo mega
  },
};
