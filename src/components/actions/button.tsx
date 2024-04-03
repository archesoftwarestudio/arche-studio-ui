import clsx from "clsx";
import React from "react";

export interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  mode?: "primary" | "secondary" | "neutral" | "accent";
  size?: "large" | "medium" | "small";
  outline?: boolean;
  block?: boolean;
}

export class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    mode: "primary",
    size: "medium",
    outline: false,
    block: false,
  };

  constructor(props: ButtonProps) {
    console.log("ButtonProps", props);
    super(props);
  }

  private modes = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    neutral: "btn-neutral",
    accent: "btn-accent",
  };

  private sizes = {
    large: "btn-lg",
    medium: "btn-md",
    small: "btn-sm",
  };

  render() {
    const {
      mode = "primary",
      block = false,
      outline = false,
      size = "medium",
      children,
      ...htmlProps
    } = this.props;

    const className = clsx(
      "btn",
      {
        [`${this.modes[mode]}`]: mode,
        [`${this.sizes[size]}`]: size,
        "btn-block": block,
        "btn-outline": outline,
      },
      this.props.className
    );

    return (
      <button {...htmlProps} className={className}>
        {children || <span>{"Button"}</span>}
      </button>
    );
  }
}
