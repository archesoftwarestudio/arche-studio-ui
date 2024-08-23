import React from "react";

export interface SelectInputProps extends React.ComponentProps<"select"> {
  label?: string;
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
  bordered?: boolean;
  ghost?: boolean;
  inputSize?: "xs" | "sm" | "md" | "lg"; // Cambié de 'size' a 'inputSize'
  options: { value: string; label: string }[]; // Array de opciones
  containerWidth?: "w-full" | "w-1/2" | "w-1/3" | "w-1/4" | "w-auto"; // Ancho del contenedor
  disabled?: boolean;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  color,
  bordered = true,
  ghost = false,
  inputSize = "md", // Cambié de 'size' a 'inputSize'
  options,
  containerWidth = "w-full", // Ancho por defecto
  disabled = false,
  className,
  ...htmlProps
}) => {
  // Mapear las clases de colores
  const colorClasses: Record<string, string> = {
    primary: "select-primary",
    secondary: "select-secondary",
    accent: "select-accent",
    info: "select-info",
    success: "select-success",
    warning: "select-warning",
    error: "select-error",
  };

  // Mapear las clases de tamaño
  const sizeClasses: Record<string, string> = {
    xs: "select-xs",
    sm: "select-sm",
    md: "select-md", // Tamaño por defecto
    lg: "select-lg",
  };

  return (
    <div className={`form-control ${containerWidth}`}>
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <select
        className={[
          "select", // Clase base del select
          bordered ? "select-bordered" : "",
          ghost ? "select-ghost" : "",
          color ? colorClasses[color] : "",
          sizeClasses[inputSize], // Cambié de 'size' a 'inputSize'
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        disabled={disabled}
        {...htmlProps}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
