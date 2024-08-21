import React from "react";

export interface TextareaProps extends React.ComponentProps<"textarea"> {
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"; // Color classes
  size?: "xs" | "sm" | "md" | "lg"; // Size classes
  bordered?: boolean; // Adds border to textarea
  ghost?: boolean; // Adds ghost style to textarea
}

export const Textarea: React.FC<TextareaProps> = ({
  color,
  size = "md",
  bordered = false,
  ghost = false,
  className,
  ...htmlProps
}) => {
  // Mapping the classes for color
  const colorClasses: Record<string, string> = {
    primary: "textarea-primary",
    secondary: "textarea-secondary",
    accent: "textarea-accent",
    info: "textarea-info",
    success: "textarea-success",
    warning: "textarea-warning",
    error: "textarea-error",
  };

  // Mapping the classes for size
  const sizeClasses: Record<string, string> = {
    xs: "textarea-xs",
    sm: "textarea-sm",
    md: "textarea-md",
    lg: "textarea-lg",
  };

  return (
    <textarea
      className={[
        "textarea", // Base class
        bordered ? "textarea-bordered" : "",
        ghost ? "textarea-ghost" : "",
        color ? colorClasses[color] : "",
        sizeClasses[size], // Size class
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...htmlProps}
    />
  );
};
