import React, { useState } from "react";

export interface RadioInputProps extends React.ComponentProps<"input"> {
  label?: string;
  size?: "xs" | "sm" | "md" | "lg"; // Tamaños del radio
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"; // Colores del radio
  disabled?: boolean; // Para manejar el estado deshabilitado
  name: string; // Nombre del grupo de radio
  checked?: boolean; // Para controlar si está seleccionado
  containerWidth?: "w-full" | "w-1/2" | "w-1/3" | "w-1/4" | "w-auto"; // Ancho del contenedor
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Controlador de cambios
}

export const RadioInput: React.FC<RadioInputProps> = ({
  label,
  size = "md", // Tamaño por defecto
  color = "primary",
  disabled = false,
  name,
  checked,
  containerWidth = "w-auto", // Ancho del contenedor por defecto
  onChange,
  className,
  ...htmlProps
}) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };

  // Mapear las clases de tamaño
  const sizeClasses: Record<string, string> = {
    xs: "radio-xs",
    sm: "radio-sm",
    md: "radio-md", // Tamaño por defecto
    lg: "radio-lg",
  };

  // Mapear las clases de color
  const colorClasses: Record<string, string> = {
    primary: "radio-primary",
    secondary: "radio-secondary",
    accent: "radio-accent",
    info: "radio-info",
    success: "radio-success",
    warning: "radio-warning",
    error: "radio-error",
  };

  return (
    <div className={`form-control ${containerWidth}`}>
      <label
        className={`label cursor-pointer ${!label ? "justify-center" : ""}`}
      >
        {label && <span className="label-text">{label}</span>}
        <input
          type="radio"
          name={name}
          className={[
            "radio", // Clase base del radio
            color ? colorClasses[color] : "",
            sizeClasses[size], // Aplicar tamaño
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          {...htmlProps}
        />
      </label>
    </div>
  );
};
