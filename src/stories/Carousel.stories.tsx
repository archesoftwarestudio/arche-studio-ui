import { Meta, StoryObj } from "@storybook/react";
import { Carousel, CarouselProps } from "../components/data-display"; // Ajusta la ruta según tu estructura de archivos

export default {
  title: "Data-Display/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    vertical: {
      control: "boolean",
    },
    reverse: {
      control: "boolean",
    },
    autoplay: {
      control: "boolean",
    },
    controls: {
      control: "boolean",
    },
    indicators: {
      control: "boolean",
    },
    interval: {
      control: { type: "number", min: 1000, max: 10000, step: 1000 },
    },
    transitionDuration: {
      control: {
        type: "select",
        options: ["short", "medium", "long"],
      },
    },
  },
  args: {
    autoplay: false,
    controls: true,
    indicators: true,
    interval: 3000,
    transitionDuration: "medium",
    position: "center",
  },
} as Meta<CarouselProps>;

type Story = StoryObj<CarouselProps>;

export const Default: Story = {
  args: {
    items: [
      <img
        key="slide1"
        src="https://via.placeholder.com/800x300?text=Slide+1"
        alt="Slide 1"
        className="w-full"
        style={{ width: "800px", height: "300px" }}
      />,
      <img
        key="slide2"
        src="https://via.placeholder.com/800x300?text=Slide+2"
        alt="Slide 2"
        className="w-full"
        style={{ width: "800px", height: "300px" }}
      />,
      <img
        key="slide3"
        src="https://via.placeholder.com/800x300?text=Slide+3"
        alt="Slide 3"
        className="w-full"
        style={{ width: "800px", height: "300px" }}
      />,
    ],
  },
};

export const Autoplay: Story = {
  args: {
    ...Default.args,
    autoplay: true,
  },
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    vertical: true,
    items: [
      <img
        key="slide1"
        src="https://via.placeholder.com/300x800?text=Slide+1"
        alt="Slide 1"
        className="w-full"
        style={{ width: "300px", height: "800px" }}
      />,
      <img
        key="slide2"
        src="https://via.placeholder.com/300x800?text=Slide+2"
        alt="Slide 2"
        className="w-full"
        style={{ width: "300px", height: "800px" }}
      />,
      <img
        key="slide3"
        src="https://via.placeholder.com/300x800?text=Slide+3"
        alt="Slide 3"
        className="w-full"
        style={{ width: "300px", height: "800px" }}
      />,
    ],
  },
};

export const Reverse: Story = {
  args: {
    ...Default.args,
    reverse: true,
  },
};

export const NoIndicators: Story = {
  args: {
    ...Default.args,
    indicators: false,
  },
};

export const LongTransition: Story = {
  args: {
    ...Default.args,
    transitionDuration: "long",
    autoplay: true,
  },
};

export const ShortTransition: Story = {
  args: {
    ...Default.args,
    transitionDuration: "short",
    autoplay: true,
  },
};

export const NoControls: Story = {
  args: {
    ...Default.args,
    controls: false,
  },
};
