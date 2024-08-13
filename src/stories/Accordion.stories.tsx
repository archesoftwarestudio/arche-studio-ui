import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionProps } from "../components/data-display";

// Definición de AccordionItemProps para Storybook
interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen?: boolean;
  disabled?: boolean;
  customIcon?: React.ReactNode;
}

export default {
  title: "Data-Display/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} as Meta<AccordionProps>;

type Story = StoryObj<AccordionProps>;

const defaultItems: AccordionItemProps[] = [
  {
    title: "What is your refund policy?",
    content:
      "You have 30 days to request a refund. Please contact our support team for more information.",
  },
  {
    title: "Do you offer technical support?",
    content:
      "Yes, we offer 24/7 technical support. You can reach us via email or phone.",
  },
  {
    title: "Can I upgrade my plan later?",
    content:
      "Absolutely! You can upgrade your plan at any time through your account dashboard.",
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    allowMultiple: false,
  },
};

export const MultipleOpen: Story = {
  args: {
    items: defaultItems,
    allowMultiple: true,
  },
};

export const FirstItemOpenByDefault: Story = {
  args: {
    items: [
      {
        title: "What is your refund policy?",
        content:
          "You have 30 days to request a refund. Please contact our support team for more information.",
        isOpen: true,
      },
      {
        title: "Do you offer technical support?",
        content:
          "Yes, we offer 24/7 technical support. You can reach us via email or phone.",
      },
      {
        title: "Can I upgrade my plan later?",
        content:
          "Absolutely! You can upgrade your plan at any time through your account dashboard.",
      },
    ],
    allowMultiple: false,
  },
};

export const WithCustomIcons: Story = {
  args: {
    items: [
      {
        title: "Fire Safety Tips",
        content:
          "Keep a fire extinguisher handy and check smoke alarms regularly.",
        customIcon: <span>🔥</span>,
      },
      {
        title: "Water Conservation",
        content: "Fix leaks promptly and use water-saving fixtures.",
        customIcon: <span>💧</span>,
      },
      {
        title: "Gardening Basics",
        content: "Choose native plants and use compost to enrich the soil.",
        customIcon: <span>🌿</span>,
      },
    ],
    allowMultiple: true,
  },
};

export const WithDisabledItem: Story = {
  args: {
    items: [
      {
        title: "Available Feature",
        content: "This feature is available and can be accessed.",
      },
      {
        title: "Coming Soon Feature",
        content:
          "This feature is under development and will be available soon.",
        disabled: true,
      },
      {
        title: "Another Available Feature",
        content: "This feature is available and ready to use.",
      },
    ],
    allowMultiple: false,
  },
};
