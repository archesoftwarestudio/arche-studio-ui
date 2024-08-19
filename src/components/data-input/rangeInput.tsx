import React, { useState } from "react";

export interface RangeInputProps extends React.ComponentProps<"input"> {
  min?: number; // Valor mínimo del rango
  max?: number; // Valor máximo del rango
  step?: number; // Incremento en los valores del rango
  value?: number; // Valor actual del rango
  size?: "xs" | "sm" | "md" | "lg"; // Tamaño del rango
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "info"
    | "error"; // Color del rango
  customColor?: string; // Color personalizado usando CSS variable
  showSteps?: boolean; // Mostrar las medidas del rango
  disabled?: boolean; // Para deshabilitar el rango
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Controlador de cambios
}

export const RangeInput: React.FC<RangeInputProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  size = "md", // Tamaño por defecto
  color = "primary", // Color por defecto
  customColor,
  showSteps = false, // Mostrar medidas
  disabled = false,
  onChange,
  className,
  ...htmlProps
}) => {
  const [rangeValue, setRangeValue] = useState(value || min);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.target.value));
    if (onChange) {
      onChange(e);
    }
  };

  // Clases de tamaño explícitas para Tailwind
  const sizeClasses: Record<string, string> = {
    xs: "range-xs",
    sm: "range-sm",
    md: "range-md",
    lg: "range-lg",
  };

  // Clases de color explícitas para Tailwind
  const colorClasses: Record<string, string> = {
    primary: "range-primary",
    secondary: "range-secondary",
    accent: "range-accent",
    success: "range-success",
    warning: "range-warning",
    info: "range-info",
    error: "range-error",
  };

  // Crear medidas del rango
  const renderSteps = () => {
    const steps = [];
    const numSteps = (max - min) / step;
    for (let i = 0; i <= numSteps; i++) {
      steps.push(<span key={i}>|</span>);
    }
    return (
      <div className="flex w-full justify-between px-2 text-xs">{steps}</div>
    );
  };

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={rangeValue}
        disabled={disabled}
        onChange={handleChange}
        className={[
          "range", // Clase base de range input
          sizeClasses[size], // Aplicar tamaño
          customColor ? `[--range-shdw:${customColor}]` : colorClasses[color], // Aplicar color o personalizado
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...htmlProps}
      />
      {showSteps && renderSteps()}
    </div>
  );
};
