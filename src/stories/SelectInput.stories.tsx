import { Meta, StoryObj } from "@storybook/react";
import { SelectInput, SelectInputProps } from "../components/data-input"; // Ajusta la ruta según tu estructura de archivos

export default {
  title: "Data-Input/SelectInput",
  component: SelectInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "accent",
          "info",
          "success",
          "warning",
          "error",
        ],
      },
    },
    inputSize: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg"],
      },
    },
    bordered: {
      control: "boolean",
    },
    ghost: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    inputSize: "md",
    bordered: true,
    ghost: false,
    disabled: false,
  },
} as Meta<SelectInputProps>;

type Story = StoryObj<SelectInputProps>;

export const DefaultSelect: Story = {
  args: {
    label: "Pick your favorite Simpson",
    options: [
      { value: "homer", label: "Homer" },
      { value: "marge", label: "Marge" },
      { value: "bart", label: "Bart" },
      { value: "lisa", label: "Lisa" },
      { value: "maggie", label: "Maggie" },
    ],
  },
};

export const SelectWithBorder: Story = {
  args: {
    label: "Who shot first?",
    bordered: true,
    options: [
      { value: "han", label: "Han Solo" },
      { value: "greedo", label: "Greedo" },
    ],
  },
};

export const GhostSelect: Story = {
  args: {
    label: "Pick the best JS framework",
    ghost: true,
    options: [
      { value: "svelte", label: "Svelte" },
      { value: "vue", label: "Vue" },
      { value: "react", label: "React" },
    ],
  },
};

export const FormControlWithLabels: Story = {
  args: {
    label: "Pick the best fantasy franchise",
    bordered: true,
    options: [
      { value: "star-wars", label: "Star Wars" },
      { value: "harry-potter", label: "Harry Potter" },
      { value: "lord-of-rings", label: "Lord of the Rings" },
      { value: "planet-apes", label: "Planet of the Apes" },
      { value: "star-trek", label: "Star Trek" },
    ],
  },
};

export const PrimarySelect: Story = {
  args: {
    label: "What is the best TV show?",
    color: "primary",
    options: [
      { value: "got", label: "Game of Thrones" },
      { value: "lost", label: "Lost" },
      { value: "breakingbad", label: "Breaking Bad" },
      { value: "walkingdead", label: "Walking Dead" },
    ],
  },
};

export const SecondarySelect: Story = {
  args: {
    label: "Pick your favorite language",
    color: "secondary",
    options: [
      { value: "java", label: "Java" },
      { value: "go", label: "Go" },
      { value: "c", label: "C" },
      { value: "csharp", label: "C#" },
      { value: "cpp", label: "C++" },
      { value: "rust", label: "Rust" },
      { value: "javascript", label: "JavaScript" },
      { value: "python", label: "Python" },
    ],
  },
};

export const AccentSelect: Story = {
  args: {
    label: "Dark mode or light mode?",
    color: "accent",
    options: [
      { value: "auto", label: "Auto" },
      { value: "dark", label: "Dark mode" },
      { value: "light", label: "Light mode" },
    ],
  },
};

export const InfoSelect: Story = {
  args: {
    label: "Select language",
    color: "info",
    options: [
      { value: "english", label: "English" },
      { value: "japanese", label: "Japanese" },
      { value: "italian", label: "Italian" },
    ],
  },
};

export const SuccessSelect: Story = {
  args: {
    label: "Pick your favorite anime",
    color: "success",
    options: [
      { value: "one-piece", label: "One Piece" },
      { value: "naruto", label: "Naruto" },
      { value: "death-note", label: "Death Note" },
      { value: "aot", label: "Attack on Titan" },
      { value: "bleach", label: "Bleach" },
      { value: "fma", label: "Fullmetal Alchemist" },
      { value: "jojo", label: "Jojo's Bizarre Adventure" },
    ],
  },
};

export const WarningSelect: Story = {
  args: {
    label: "Pick a pizza",
    color: "warning",
    options: [
      { value: "cheese", label: "Cheese" },
      { value: "veggie", label: "Veggie" },
      { value: "pepperoni", label: "Pepperoni" },
      { value: "margherita", label: "Margherita" },
      { value: "hawaiian", label: "Hawaiian" },
    ],
  },
};

export const ErrorSelect: Story = {
  args: {
    label: "What is the best headless CMS?",
    color: "error",
    options: [
      { value: "strapi", label: "Strapi" },
      { value: "ghost", label: "Ghost" },
      { value: "netlify-cms", label: "Netlify CMS" },
      { value: "sanity", label: "Sanity" },
    ],
  },
};

export const LargeSelect: Story = {
  args: {
    label: "Large",
    inputSize: "lg",
    bordered: true,
    options: [
      { value: "large-apple", label: "Large Apple" },
      { value: "large-orange", label: "Large Orange" },
      { value: "large-tomato", label: "Large Tomato" },
    ],
  },
};

export const SmallSelect: Story = {
  args: {
    label: "Small",
    inputSize: "sm",
    bordered: true,
    options: [
      { value: "small-apple", label: "Small Apple" },
      { value: "small-orange", label: "Small Orange" },
      { value: "small-tomato", label: "Small Tomato" },
    ],
  },
};

export const ExtraSmallSelect: Story = {
  args: {
    label: "Tiny",
    inputSize: "xs",
    bordered: true,
    options: [
      { value: "tiny-apple", label: "Tiny Apple" },
      { value: "tiny-orange", label: "Tiny Orange" },
      { value: "tiny-tomato", label: "Tiny Tomato" },
    ],
  },
};

export const DisabledSelect: Story = {
  args: {
    disabled: true,
    options: [{ value: "disabled", label: "You can't touch this" }],
  },
};
