import { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsProps } from "../components/navigation";
import { MdGroup, MdSettings, MdSubscriptions } from "react-icons/md";

export default {
  title: "Navigation/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["boxed", "bordered", "lifted"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg"],
      },
    },
    useRadio: {
      control: "boolean",
    },
  },
  args: {
    variant: "bordered",
    size: "md",
    useRadio: false,
  },
} as Meta<TabsProps>;

type Story = StoryObj<TabsProps>;

export const DefaultTabs: Story = {
  args: {
    items: [
      { label: "Tab 1", content: <div>Content 1</div> },
      { label: "Tab 2", content: <div>Content 2</div> },
      { label: "Tab 3", content: <div>Content 3</div> },
    ],
  },
};

export const TabsWithIcons: Story = {
  args: {
    items: [
      {
        label: "Grupos",
        icon: <MdGroup />,
        content: <div>Contenido de Grupos</div>,
      },
      {
        label: "Planes",
        icon: <MdSubscriptions />,
        content: <div>Contenido de Planes</div>,
      },
      {
        label: "Configuración",
        icon: <MdSettings />,
        content: <div>Contenido de Configuración</div>,
      },
    ],
  },
};

export const TabsWithNavigation: Story = {
  args: {
    items: [
      {
        label: "Grupos",
        icon: <MdGroup />,
        onClick: () => alert("Navegando a Grupos"),
        isActive: false,
      },
      {
        label: "Planes de Subscripción",
        icon: <MdSubscriptions />,
        onClick: () => alert("Navegando a Planes"),
        isActive: false,
      },
      {
        label: "Configuración",
        icon: <MdSettings />,
        onClick: () => alert("Navegando a Configuración"),
        isActive: true,
      },
    ],
  },
};

export const BorderedTabs: Story = {
  args: {
    variant: "bordered",
    items: [
      { label: "Tab 1", content: <div>Content 1</div> },
      { label: "Tab 2", content: <div>Content 2</div> },
      { label: "Tab 3", content: <div>Content 3</div> },
    ],
  },
};

export const LiftedTabs: Story = {
  args: {
    variant: "lifted",
    useRadio: true,
    items: [
      { label: "Tab 1", content: <div>Content 1</div> },
      { label: "Tab 2", content: <div>Content 2</div> },
      { label: "Tab 3", content: <div>Content 3</div> },
    ],
  },
};

export const BoxedTabs: Story = {
  args: {
    variant: "boxed",
    items: [
      { label: "Tab 1", content: <div>Content 1</div> },
      { label: "Tab 2", content: <div>Content 2</div> },
      { label: "Tab 3", content: <div>Content 3</div> },
    ],
  },
};

export const CustomColorsTabs: Story = {
  args: {
    variant: "lifted",
    items: [
      { label: "Tab 1", content: <div>Content 1</div> },
      {
        label: "Tab 2",
        content: <div>Content 2</div>,
        customStyles: {
          "--tab-bg": "yellow",
          "--tab-border-color": "orange",
          color: "var(--primary)",
        },
      },
      { label: "Tab 3", content: <div>Content 3</div> },
    ],
  },
};

export const LargeTabsWithIcons: Story = {
  args: {
    size: "lg",
    items: [
      {
        label: "Inicio",
        icon: <MdGroup />,
        content: <div>Bienvenido a la sección de Inicio</div>,
      },
      {
        label: "Servicios",
        icon: <MdSubscriptions />,
        content: <div>Aquí están los servicios disponibles</div>,
      },
      {
        label: "Ajustes",
        icon: <MdSettings />,
        content: <div>Configura tus preferencias</div>,
      },
    ],
  },
};

export const RadioTabsExample: Story = {
  args: {
    useRadio: true,
    name: "example_radio_tabs",
    items: [
      { label: "Radio Tab 1", content: <div>Radio Content 1</div> },
      { label: "Radio Tab 2", content: <div>Radio Content 2</div> },
      { label: "Radio Tab 3", content: <div>Radio Content 3</div> },
    ],
  },
};
