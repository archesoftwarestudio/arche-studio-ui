import React from "react";

export interface ProgressProps extends React.ComponentProps<"progress"> {
  value: number; // Representa el valor de progreso entre 0 y 100
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
  size?: "sm" | "md" | "lg"; // Opcional para manejar tamaños
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  color = "primary", // Color por defecto
  size = "md",
  className,
  ...htmlProps
}) => {
  // Mapear las clases de color
  const colorClasses: Record<string, string> = {
    primary: "progress-primary",
    secondary: "progress-secondary",
    accent: "progress-accent",
    info: "progress-info",
    success: "progress-success",
    warning: "progress-warning",
    error: "progress-error",
  };

  // Mapear las clases de tamaño
  const sizeClasses: Record<string, string> = {
    sm: "progress-sm",
    md: "progress-md",
    lg: "progress-lg",
  };
  return (
    <progress
      className={[
        "progress",
        colorClasses[color], // Aplicar la clase de color
        sizeClasses[size], // Aplicar la clase de tamaño
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      value={value}
      max="100"
      {...htmlProps}
    >
      {value}%
    </progress>
  );
};
