import React, { useState } from "react";
import { MdClose, MdVisibility, MdVisibilityOff } from "react-icons/md"; // Agregamos el ícono de cruz

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
  children?: React.ReactNode;
  containerWidth?: "w-full" | "w-1/2" | "w-1/3" | "w-1/4" | "w-auto"; // Ancho del contenedor
  onClear?: () => void;
  errorMessage?: string;
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
  children,
  containerWidth = "w-full",
  className,
  type = "text",
  onClear,
  errorMessage,
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

        {children}

        <input
          type={isPasswordInput && showPassword ? "text" : type}
          placeholder={children ? "" : placeholder}
          disabled={disabled}
          className="grow h-full"
          {...htmlProps}
        />

        {onClear && (
          <button
            type="button"
            onClick={onClear}
            className="btn btn-sm btn-ghost"
            style={{ position: "relative", right: "-0.8rem" }}
          >
            {<MdClose />}
          </button>
        )}

        {isPasswordInput && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="btn btn-sm btn-ghost "
            style={{ position: "relative", right: "-0.8rem" }}
          >
            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
          </button>
        )}
      </label>

      {errorMessage && (
        <span className="text-sm text-error mt-1">{errorMessage}</span>
      )}
    </div>
  );
};
