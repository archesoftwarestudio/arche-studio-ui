import { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsProps } from "../components/navigation"; // Ajusta la ruta según tu estructura de archivos

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

export const SmallTabs: Story = {
  args: {
    size: "sm",
    items: [
      { label: "Small Tab 1", content: <div>Small Content 1</div> },
      { label: "Small Tab 2", content: <div>Small Content 2</div> },
      { label: "Small Tab 3", content: <div>Small Content 3</div> },
    ],
  },
};

export const ExtraSmallTabs: Story = {
  args: {
    size: "xs",
    items: [
      { label: "Extra Small Tab 1", content: <div>XS Content 1</div> },
      { label: "Extra Small Tab 2", content: <div>XS Content 2</div> },
      { label: "Extra Small Tab 3", content: <div>XS Content 3</div> },
    ],
  },
};

export const LargeTabs: Story = {
  args: {
    size: "lg",
    variant: "lifted",
    items: [
      { label: "Large Tab 1", content: <div>Large Content 1</div> },
      { label: "Large Tab 2", content: <div>Large Content 2</div> },
      { label: "Large Tab 3", content: <div>Large Content 3</div> },
    ],
  },
};

export const WithRadioTabs: Story = {
  args: {
    useRadio: true,
    name: "my_radio_tabs",
    variant: "bordered",
    items: [
      {
        label: "Radio Tab 1",
        content: <div className="p-10">Radio Content 1</div>,
      },
      {
        label: "Radio Tab 2",
        content: <div className="p-10">Radio Content 2</div>,
      },
      {
        label: "Radio Tab 3",
        content: <div className="p-10">Radio Content 3</div>,
      },
    ],
  },
};

export const LiftedRadioTabsWithContent: Story = {
  args: {
    useRadio: true,
    name: "my_radio_tabs_2",
    variant: "lifted",
    items: [
      {
        label: "Tab 1",
        content: (
          <div className="p-6 bg-base-100 border-base-300 rounded-box">
            Content 1
          </div>
        ),
      },
      {
        label: "Tab 2",
        content: (
          <div className="p-6 bg-base-100 border-base-300 rounded-box">
            Content 2
          </div>
        ),
      },
      {
        label: "Tab 3",
        content: (
          <div className="p-6 bg-base-100 border-base-300 rounded-box">
            Content 3
          </div>
        ),
      },
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
