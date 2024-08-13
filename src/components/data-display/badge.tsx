import React from "react";

export interface BadgeProps extends React.ComponentProps<"div"> {
  type?: "default" | "outline";
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  type = "default",
  color = "primary",
  size = "md",
  icon,
  className,
  children,
  ...htmlProps
}) => {
  // Definimos las posibles combinaciones de clases de TailwindCSS de forma explícita
  const baseClasses = "badge";
  const typeClass = type === "outline" ? "badge-outline" : "";
  const sizeClass =
    size === "sm" ? "badge-sm" : size === "lg" ? "badge-lg" : "";

  const colorClasses = {
    primary: "badge-primary",
    secondary: "badge-secondary",
    accent: "badge-accent",
    info: "badge-info",
    success: "badge-success",
    warning: "badge-warning",
    error: "badge-error",
    ghost: "badge-ghost",
  };

  const colorClass = colorClasses[color] || "";

  // Concatenamos las clases, asegurando que no se inserten valores vacíos
  const classes = [baseClasses, typeClass, sizeClass, colorClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...htmlProps}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </div>
  );
};
