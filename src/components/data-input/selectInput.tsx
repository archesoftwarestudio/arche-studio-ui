import React from "react";

export interface SelectOption {
  value: string;
  label: string;
  selected?: boolean; // Añadido para permitir selección predeterminada
  disabled?: boolean; // Añadido para deshabilitar opciones específicas
}

export interface SelectInputProps extends React.ComponentProps<"select"> {
  label?: string;
  labelTextAlt?: string; // Etiqueta alternativa para los casos de uso con label
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
  inputSize?: "xs" | "sm" | "md" | "lg";
  options: SelectOption[];
  containerWidth?: "w-full" | "w-1/2" | "w-1/3" | "w-1/4" | "w-auto";
  disabled?: boolean;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  labelTextAlt,
  color,
  bordered = false,
  ghost = false,
  inputSize = "md",
  options,
  containerWidth = "w-full",
  disabled = false,
  className,
  ...htmlProps
}) => {
  const colorClasses: Record<string, string> = {
    primary: "select-primary",
    secondary: "select-secondary",
    accent: "select-accent",
    info: "select-info",
    success: "select-success",
    warning: "select-warning",
    error: "select-error",
  };

  const sizeClasses: Record<string, string> = {
    xs: "select-xs",
    sm: "select-sm",
    md: "select-md",
    lg: "select-lg",
  };

  return (
    <label className={`form-control ${containerWidth}`}>
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
          {labelTextAlt && (
            <span className="label-text-alt">{labelTextAlt}</span>
          )}
        </div>
      )}
      <select
        className={[
          "select",
          bordered ? "select-bordered" : "",
          ghost ? "select-ghost" : "",
          color ? colorClasses[color] : "",
          sizeClasses[inputSize],
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        disabled={disabled}
        {...htmlProps}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            selected={option.selected}
          >
            {option.label}
          </option>
        ))}
      </select>
      {labelTextAlt && (
        <div className="label">
          <span className="label-text-alt">{labelTextAlt}</span>
          <span className="label-text-alt">{labelTextAlt}</span>
        </div>
      )}
    </label>
  );
};
