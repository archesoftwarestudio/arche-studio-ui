import type { Meta, StoryObj } from "@storybook/react";
import { Drawer, DrawerProps } from "../components/layout";

// Definición de meta para Storybook
export default {
  title: "Layout/Drawer",
  component: Drawer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} as Meta<DrawerProps>;

type Story = StoryObj<DrawerProps>;

// Contenido del menú lateral para las Stories
const defaultSideContent = (
  <ul className="menu p-4 w-80 bg-base-200">
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">Profile</a>
    </li>
    <li>
      <a href="#">Settings</a>
    </li>
    <li>
      <a href="#">Help</a>
    </li>
  </ul>
);

// Contenido principal para las Stories
const defaultChildren = (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Contenido Principal</h1>
    <p>
      Este es el contenido principal de la aplicación, visible junto al Drawer.
    </p>
  </div>
);

// Story: Drawer básico
export const Basic: Story = {
  args: {
    sideContent: defaultSideContent,
    children: defaultChildren,
    open: false,
  },
};

// Story: Drawer abierto por defecto
export const OpenByDefault: Story = {
  args: {
    sideContent: defaultSideContent,
    children: defaultChildren,
    open: true,
  },
};

// Story: Drawer con contenido personalizado
export const CustomSideContent: Story = {
  args: {
    sideContent: (
      <div className="p-4 w-80 bg-secondary text-secondary-content">
        <h2 className="text-xl font-bold">Menú Personalizado</h2>
        <ul className="menu">
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Usuarios</a>
          </li>
          <li>
            <a href="#">Reportes</a>
          </li>
          <li>
            <a href="#">Configuración</a>
          </li>
        </ul>
      </div>
    ),
    children: (
      <div className="p-4">
        <h1 className="text-3xl font-bold">Panel de Administración</h1>
        <p>
          Utiliza el menú lateral para navegar por las diferentes secciones.
        </p>
      </div>
    ),
    open: false,
  },
};

// Story: Drawer responsivo (solo botón en móviles)
export const Responsive: Story = {
  args: {
    sideContent: defaultSideContent,
    children: (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Vista Responsiva</h1>
        <p>
          En pantallas móviles, el Drawer se oculta y aparece un botón para
          abrirlo.
        </p>
      </div>
    ),
    open: true,
  },
};
