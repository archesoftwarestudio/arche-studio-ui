import React from "react";

export interface LoadingProps extends React.ComponentProps<"div"> {
  type?: "spinner" | "dots" | "ring" | "ball" | "bars";
  size?: "sm" | "md" | "lg";
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "neutral"
    | "info"
    | "success"
    | "warning"
    | "error";
}

export const Loading: React.FC<LoadingProps> = ({
  type = "spinner",
  size = "md",
  color = "primary", // Color por defecto
  className,
  ...htmlProps
}) => {
  // Declarar las clases de acuerdo al tipo de indicador de carga
  const typeClasses: Record<string, string> = {
    spinner: "loading-spinner",
    dots: "loading-dots",
    ring: "loading-ring",
    ball: "loading-ball",
    bars: "loading-bars",
  };

  // Declarar las clases de tamaño
  const sizeClasses: Record<string, string> = {
    sm: "loading-sm",
    md: "loading-md",
    lg: "loading-lg",
  };

  // Declarar las clases de color
  const colorClasses: Record<string, string> = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    neutral: "text-neutral",
    info: "text-info",
    success: "text-success",
    warning: "text-warning",
    error: "text-error",
  };

  return (
    <div
      className={[
        "loading",
        typeClasses[type],
        sizeClasses[size],
        colorClasses[color], // Aplicar la clase de color
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...htmlProps}
    />
  );
};
