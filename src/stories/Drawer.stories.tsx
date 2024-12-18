import type { Meta, StoryObj } from "@storybook/react";
import { Drawer, DrawerProps } from "../components/layout";
import { useState } from "react";

// Definición de meta para Storybook
export default {
  title: "Layout/Drawer",
  component: Drawer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controla si el Drawer está abierto o cerrado",
      defaultValue: false,
    },
    sideContent: {
      control: false,
      description: "Contenido del menú lateral",
    },
    children: {
      control: false,
      description: "Contenido principal de la aplicación",
    },
    onClose: {
      action: "onClose",
      description: "Callback para manejar el cierre del Drawer",
    },
  },
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

export const Basic: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false); // Estado inicial directamente en la historia
    return (
      <div>
        <button className="btn btn-primary m-4" onClick={() => setIsOpen(true)}>
          Abrir Drawer
        </button>
        <Drawer {...args} open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  },
  args: {
    sideContent: defaultSideContent,
    children: defaultChildren,
  },
};

export const OpenByDefault: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true); // Estado inicial abierto
    return (
      <div>
        <button className="btn btn-primary m-4" onClick={() => setIsOpen(true)}>
          Abrir Drawer
        </button>
        <Drawer {...args} open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  },
  args: {
    sideContent: defaultSideContent,
    children: defaultChildren,
  },
};

/// Story: Drawer con contenido personalizado
export const CustomSideContent: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false); // Estado inicial directamente en la historia
    const sideContent = (
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
        {/* Botón para cerrar el Drawer */}
        <button
          className="btn btn-outline mt-4"
          onClick={() => setIsOpen(false)} // Utilizar setIsOpen aquí
        >
          Cerrar Drawer
        </button>
      </div>
    );

    return (
      <div>
        <button className="btn btn-primary m-4" onClick={() => setIsOpen(true)}>
          Abrir Drawer
        </button>
        <Drawer
          {...args}
          open={isOpen}
          onClose={() => setIsOpen(false)}
          sideContent={sideContent}
        />
      </div>
    );
  },
  args: {
    children: (
      <div className="p-4">
        <h1 className="text-3xl font-bold">Panel de Administración</h1>
        <p>
          Utiliza el menú lateral para navegar por las diferentes secciones.
        </p>
      </div>
    ),
  },
};

// Story: Drawer responsivo (solo botón en móviles)
export const Responsive: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true); // Estado inicial directamente en la historia
    return (
      <div>
        <button className="btn btn-primary m-4" onClick={() => setIsOpen(true)}>
          Abrir Drawer
        </button>
        <Drawer {...args} open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  },
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
  },
};
