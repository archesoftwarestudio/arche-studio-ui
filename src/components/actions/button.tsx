import clsx from "clsx";
import React from "react";

export interface ButtonProps extends React.ComponentProps<"button"> {
  children?: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "neutral"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "link"
    | "ghost"
    | "glass";
  size?: "large" | "medium" | "small" | "extra-small";
  outline?: boolean;
  block?: boolean;
  circle?: boolean;
  square?: boolean;
  wide?: boolean;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    variant = "primary",
    block = false,
    outline = false,
    size = "medium",
    circle = false,
    square = false,
    wide = false,
    children = <span>{"Button"}</span>,
    className,
    ...htmlProps
  } = props;

  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
    neutral: "btn-neutral",
    success: "btn-success",
    warning: "btn-warning",
    error: "btn-error",
    info: "btn-info",
    link: "btn-link",
    ghost: "btn-ghost",
    glass: "btn-glass",
  };

  const sizes = {
    large: "btn-lg",
    medium: "btn-md",
    small: "btn-sm",
    "extra-small": "btn-xs",
  };

  const componentClass = clsx(
    "btn",
    {
      [`${variants[variant!]}`]: variant,
      [`${sizes[size!]}`]: size,
      "btn-block": block,
      "btn-outline": outline && variant !== "link", // No aplicar outline en link
      "btn-circle": circle, // Botón circular
      "btn-square": square, // Botón cuadrado
      "btn-wide": wide, // Ancho completo en pantallas pequeñas
    },
    className
  );

  return (
    <button className={componentClass} {...htmlProps}>
      {children || <span>{"Button"}</span>}
    </button>
  );
};
