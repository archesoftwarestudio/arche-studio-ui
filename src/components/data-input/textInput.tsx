import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff, MdClose } from "react-icons/md"; // Agregamos el ícono de cruz

export interface TextInputProps extends React.ComponentProps<"input"> {
  label?: string; // Texto para el label
  placeholder?: string; // Placeholder del input
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"; // Colores de DaisyUI
  bordered?: boolean; // Añadir borde
  ghost?: boolean; // Añadir estilo ghost
  inputSize?: "xs" | "sm" | "md" | "lg"; // Tamaños responsivos
  disabled?: boolean; // Deshabilitar el input
  icon?: React.ReactNode; // Icono dentro del input
  customLabel?: string | React.ReactNode; // Texto o elemento personalizado en el label
  badgeText?: string; // Texto del badge
  onBadgeRemove?: () => void; // Función para eliminar el badge
  containerWidth?: "w-full" | "w-1/2" | "w-1/3" | "w-1/4" | "w-auto"; // Ancho del contenedor
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder = "Type here",
  color,
  bordered = true,
  ghost = false,
  inputSize = "md",
  disabled = false,
  icon,
  customLabel,
  badgeText = "",
  onBadgeRemove, // Función que se ejecuta al eliminar el badge
  containerWidth = "w-full",
  className,
  type = "text",
  ...htmlProps
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const colorClasses: Record<string, string> = {
    primary: "input-primary",
    secondary: "input-secondary",
    accent: "input-accent",
    info: "input-info",
    success: "input-success",
    warning: "input-warning",
    error: "input-error",
  };

  const sizeClasses: Record<string, string> = {
    xs: "input-xs",
    sm: "input-sm",
    md: "input-md",
    lg: "input-lg",
  };

  const isPasswordInput = type === "password";

  return (
    <div className={`form-control ${containerWidth}`}>
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <label
        className={[
          "input",
          "flex", // Para alinear el contenido
          "items-center",
          "gap-2", // Añadir espacio entre elementos
          bordered ? "input-bordered" : "",
          ghost ? "input-ghost" : "",
          color ? colorClasses[color] : "",
          sizeClasses[inputSize],
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {icon && <span className="icon">{icon}</span>}
        {customLabel && <span className="custom-label">{customLabel}</span>}
        {badgeText && (
          <div className="badge badge-info flex items-center">
            {badgeText}
            <button type="button" onClick={onBadgeRemove} className="ml-1">
              <MdClose />
            </button>
          </div>
        )}
        <input
          type={isPasswordInput && showPassword ? "text" : type}
          placeholder={!badgeText ? placeholder : ""}
          disabled={disabled}
          className="grow h-full"
          {...htmlProps}
        />

        {isPasswordInput && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="btn btn-sm btn-ghost"
            style={{ position: "relative", right: "-0.8rem" }}
          >
            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
          </button>
        )}
      </label>
    </div>
  );
};
