import React from "react";

export interface FileInputProps extends React.ComponentProps<"input"> {
  label?: string;
  inputSize?: "xs" | "sm" | "md" | "lg"; // Renombrar size a inputSize
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"; // Colores del input
  bordered?: boolean; // Si el input debe tener borde
  ghost?: boolean; // Estilo ghost
  maxWidth?: string; // Clases de Tailwind para el ancho máximo
  disabled?: boolean; // Para manejar el estado deshabilitado
  altLabel?: string; // Texto alternativo para la etiqueta
}

export const FileInput: React.FC<FileInputProps> = ({
  label,
  inputSize = "md", // Tamaño por defecto
  color,
  bordered = false,
  ghost = false,
  maxWidth = "max-w-xs", // Ancho máximo por defecto
  disabled = false,
  altLabel,
  className,
  ...htmlProps
}) => {
  // Mapear las clases de tamaño
  const sizeClasses: Record<string, string> = {
    xs: "file-input-xs",
    sm: "file-input-sm",
    md: "file-input-md",
    lg: "file-input-lg",
  };

  // Mapear las clases de color
  const colorClasses: Record<string, string> = {
    primary: "file-input-primary",
    secondary: "file-input-secondary",
    accent: "file-input-accent",
    info: "file-input-info",
    success: "file-input-success",
    warning: "file-input-warning",
    error: "file-input-error",
  };

  return (
    <div className="form-control w-full">
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
          {altLabel && <span className="label-text-alt">{altLabel}</span>}
        </div>
      )}
      <input
        type="file"
        className={[
          "file-input", // Clase base de file input
          sizeClasses[inputSize], // Aplicar tamaño usando inputSize
          color ? colorClasses[color] : "", // Aplicar color si se define
          bordered ? "file-input-bordered" : "", // Aplicar borde si está activado
          ghost ? "file-input-ghost" : "", // Aplicar estilo ghost si está activado
          maxWidth, // Ancho máximo
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        disabled={disabled}
        {...htmlProps}
      />
      {altLabel && (
        <div className="label">
          <span className="label-text-alt">{altLabel}</span>
          <span className="label-text-alt">{altLabel}</span>
        </div>
      )}
    </div>
  );
};
