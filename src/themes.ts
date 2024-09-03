export interface ThemeProps {
  primary: string;
  "primary-content": string;
  secondary: string;
  "secondary-content": string;
  accent: string;
  "accent-content": string;
  neutral: string;
  "neutral-content": string;
  "base-100": string;
  "base-200"?: string;
  "base-300"?: string;
  "base-content"?: string;
  info: string;
  "info-content"?: string;
  success: string;
  "success-content"?: string;
  warning: string;
  "warning-content"?: string;
  error: string;
  "error-content"?: string;
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
    primary: "#002129", // gunmetal
    "primary-content": "#ffffff", // contenido legible para primary
    secondary: "#3fa385", // zomp
    "secondary-content": "#ffffff", // dimgray
    accent: "#fff0e6", // soft-crayola
    "accent-content": "#ef7b45", // crayola o contenido legible
    neutral: "#364853", // charcoal
    "neutral-content": "#b1b3bb", // frenchgray
    "base-100": "#f6f7f8", // seasalt
    "base-200": "#d4d5da", // platinum
    "base-300": "#e5e6e9", // platinumshiny
    "base-content": "#002129", // gunmetal
    info: "#b1b3bb", // frenchgray
    "info-content": "#ffffff", // contenido legible
    success: "#26570b", // color-success
    "success-content": "#ffffff", // contenido legible
    warning: "#f2c535", // color-warning
    "warning-content": "#000000", // contenido legible
    error: "#b11705", // color-danger
    "error-content": "#ffffff",
    "--rounded-box": "1rem",
    "--rounded-btn": "0.5rem",
    "--rounded-badge": "1.9rem",
    "--animation-btn": "0.25s",
    "--animation-input": "0.2s",
    "--btn-focus-scale": "0.95",
    "--border-btn": "1px",
    "--tab-border": "1px",
    "--tab-radius": "0.5rem",
  },
};
