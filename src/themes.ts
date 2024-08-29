export interface ThemeProps {
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
  "base-100": string;
  "--rounded-box": string;
  "--rounded-btn": string;
  "--rounded-badge": string;
  "--animation-btn": string;
  "--animation-input": string;
  "--btn-focus-scale": string;
  "--border-btn": string;
  "--tab-border": string;
  "--tab-radius": string;
}

export interface ThemesProps {
  light: ThemeProps;
}

export const Themes: ThemesProps = {
  light: {
    primary: "#02875f",
    secondary: "#036046",
    accent: "rgb(255, 225, 217)",
    neutral: "#63d7b1",
    "base-100": "#fcfcfa",
    "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
    "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
    "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
    "--animation-btn": "0.25s", // duration of animation when you click on button
    "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
    "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
    "--border-btn": "1px", // border width of buttons
    "--tab-border": "1px", // border width of tabs
    "--tab-radius": "0.5rem", // border radius of tabs
  },
};
