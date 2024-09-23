import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

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
  inputSize?: "xs" | "sm" | "md" | "lg"; // Tamaños responsivos, renombrado para evitar conflicto
  disabled?: boolean; // Deshabilitar el input
  icon?: React.ReactNode; // Icono dentro del input
  customLabel?: string | React.ReactNode; // Texto o elemento personalizado en el label
  withBadge?: boolean; // Opción para mostrar un badge dentro del input
  badgeText?: string; // Texto del badge
  containerWidth?: "w-full" | "w-1/2" | "w-1/3" | "w-1/4" | "w-auto"; // Ancho del contenedor
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder = "Type here",
  color,
  bordered = true,
  ghost = false,
  inputSize = "md", // Tamaño por defecto
  disabled = false,
  icon,
  customLabel,
  withBadge = false,
  badgeText = "",
  containerWidth = "w-full",
  className,
  type = "text",
  ...htmlProps
}) => {
  const [showPassword, setShowPassword] = useState(false);
  // Mapear las clases de color explícitas
  const colorClasses: Record<string, string> = {
    primary: "input-primary",
    secondary: "input-secondary",
    accent: "input-accent",
    info: "input-info",
    success: "input-success",
    warning: "input-warning",
    error: "input-error",
  };

  // Mapear las clases de tamaño explícitas
  const sizeClasses: Record<string, string> = {
    xs: "input-xs",
    sm: "input-sm",
    md: "input-md",
    lg: "input-lg",
  };

  const isPasswordInput = type === "password";
  // Añadir clase `items-center` para alinear el contenido verticalmente
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
          "flex", // Asegurar que el contenido esté alineado en flexbox
          "items-center", // Centrar verticalmente el contenido
          "gap-2", // Añadir un espacio entre el icono y el input
          bordered ? "input-bordered" : "",
          ghost ? "input-ghost" : "",
          color ? colorClasses[color] : "",
          sizeClasses[inputSize], // Aplicar tamaño usando inputSize
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {icon && <span className="icon">{icon}</span>}
        {customLabel && <span className="custom-label">{customLabel}</span>}
        <input
          type={isPasswordInput && showPassword ? "text" : type}
          placeholder={placeholder}
          disabled={disabled}
          className="grow h-full" // El input toma el ancho restante y asegura la altura completa
          {...htmlProps}
        />
        {withBadge && <span className="badge badge-info">{badgeText}</span>}
        {isPasswordInput && (
          <button
            type="button"
            onClick={() => setShowPassword(!setShowPassword)}
            className="btn btn-ghost"
          >
            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
          </button>
        )}
      </label>
    </div>
  );
};
