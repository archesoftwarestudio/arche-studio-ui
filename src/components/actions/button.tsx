import clsx from "clsx";
import React from "react";

export interface ButtonProps extends React.ComponentProps<"button"> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "neutral" | "accent";
  size?: "large" | "medium" | "small";
  outline?: boolean;
  block?: boolean;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    variant = "primary",
    block = false,
    outline = false,
    size = "medium",
    children = <span>{"Button"}</span>,
    className,
    ...htmlProps
  } = props;

  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    neutral: "btn-neutral",
    accent: "btn-accent",
  };

  const sizes = {
    large: "btn-lg",
    medium: "btn-md",
    small: "btn-sm",
  };

  const componentClass = clsx(
    "btn",
    {
      [`${variants[variant!]}`]: variant,
      [`${sizes[size!]}`]: size,
      "btn-block": block,
      "btn-outline": outline,
    },
    className
  );

  return (
    <button className={componentClass} {...htmlProps}>
      {children || <span>{"Button"}</span>}
    </button>
  );
};
