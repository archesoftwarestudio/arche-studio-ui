import React from "react";
import { MdClose } from "react-icons/md";

export interface BadgeProps extends React.ComponentProps<"div"> {
  type?: "default" | "outline";
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  onClose?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({
  type = "default",
  color = "primary",
  size = "md",
  icon,
  className,
  children,
  onClose,
  ...htmlProps
}) => {
  // Definimos las posibles combinaciones de clases de TailwindCSS de forma explícita
  const baseClasses = "badge relative"; // 'relative' para manejar el botón 'absolute'
  const typeClass = type === "outline" ? "badge-outline" : "";
  const sizeClass =
    size === "sm" ? "badge-sm" : size === "lg" ? "badge-lg" : "";

  const colorClasses = {
    primary: "badge-primary",
    secondary: "badge-secondary",
    accent: "badge-accent",
    info: "badge-info",
    success: "badge-success",
    warning: "badge-warning",
    error: "badge-error",
    ghost: "badge-ghost",
  };

  const colorClass = colorClasses[color] || "";

  // Concatenamos las clases, asegurando que no se inserten valores vacíos
  const classes = [baseClasses, typeClass, sizeClass, colorClass, className]
    .filter(Boolean)
    .join(" ");

  // Tamaño del ícono de cierre basado en el tamaño del badge
  const closeButtonSize =
    size === "sm" ? "w-3 h-3" : size === "lg" ? "w-5 h-5" : "w-4 h-4";

  // Agregamos padding-right cuando hay un botón de cerrar para evitar que el texto se solape
  const paddingRight = onClose ? "pr-6" : ""; // Ajustar según el tamaño del botón

  return (
    <div className={`${classes} ${paddingRight}`} {...htmlProps}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {onClose && (
        <MdClose
          className={`absolute top-1/2 transform -translate-y-1/2 cursor-pointer ${closeButtonSize} `}
          style={{ right: "0.2rem" }}
          onClick={onClose}
        />
      )}
    </div>
  );
};
