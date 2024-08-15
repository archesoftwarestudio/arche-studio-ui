import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Íconos para la paginación

export interface PaginationProps extends React.ComponentProps<"div"> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "accent" | "ghost";
  showIcons?: boolean;
  disablePrev?: boolean;
  disableNext?: boolean;
  join?: boolean; // Nueva propiedad para unir botones
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  size = "md",
  variant = "primary",
  showIcons = false, // Por defecto, no mostrar las flechas
  disablePrev = false,
  disableNext = false,
  join = false, // Por defecto, los botones no están unidos
  className,
  ...htmlProps
}) => {
  const sizeClass = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  };

  const variantClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
    ghost: "btn-ghost",
  };

  const buttonClass = join ? "join-item btn" : "btn"; // Si join está activado, usa "join-item btn"

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={[
          buttonClass,
          sizeClass[size],
          i === currentPage ? variantClass[variant] : "",
          !join ? "mx-1" : "", // Si no están unidos, se aplica margen
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {i}
      </button>
    );
  }

  return (
    <div
      className={[
        join ? "join" : "inline-flex gap-2", // Si están unidos, usamos "join"; si no, "inline-flex gap-2"
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...htmlProps}
    >
      {showIcons && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className={[
            buttonClass,
            sizeClass[size],
            disablePrev ? "btn-disabled" : "",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          disabled={disablePrev || currentPage === 1} // Deshabilitar si es la primera página
        >
          <FaChevronLeft />
        </button>
      )}
      {pages}
      {showIcons && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className={[
            buttonClass,
            sizeClass[size],
            disableNext ? "btn-disabled" : "",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          disabled={disableNext || currentPage === totalPages} // Deshabilitar si es la última página
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};
