import React, { useState, useEffect, useRef } from "react";

export interface CheckboxProps extends React.ComponentProps<"input"> {
  label?: string;
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "info"
    | "error";
  checkboxSize?: "xs" | "sm" | "md" | "lg";
  indeterminate?: boolean;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  containerWidth?: "w-full" | "w-1/2" | "w-1/3" | "w-1/4" | "w-auto"; // Opciones de ancho del contenedor
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  color = "primary",
  checkboxSize = "md",
  indeterminate = false,
  disabled = false,
  checked,
  onChange,
  containerWidth = "w-auto", // Valor por defecto para el ancho del contenedor
  className,
  ...htmlProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(checked || false);

  // Hacer el checkbox indeterminado si se pasa la propiedad
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  // Actualizar el estado del checkbox si es controlado
  useEffect(() => {
    if (typeof checked === "boolean") {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };

  // Mapear las clases de color explícitamente para que Tailwind las detecte
  const colorClasses: Record<string, string> = {
    primary: "checkbox-primary",
    secondary: "checkbox-secondary",
    accent: "checkbox-accent",
    success: "checkbox-success",
    warning: "checkbox-warning",
    info: "checkbox-info",
    error: "checkbox-error",
  };

  // Mapear las clases de tamaño explícitamente
  const sizeClasses: Record<string, string> = {
    xs: "checkbox-xs",
    sm: "checkbox-sm",
    md: "checkbox-md",
    lg: "checkbox-lg",
  };

  return (
    <div className={`form-control ${containerWidth}`}>
      <label
        className={`label cursor-pointer ${!label ? "justify-center" : ""}`}
      >
        {label && <span className="label-text">{label}</span>}
        <input
          ref={inputRef}
          type="checkbox"
          className={[
            "checkbox", // Clase base de checkbox
            color ? colorClasses[color] : "",
            sizeClasses[checkboxSize], // Aplicar tamaño
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
