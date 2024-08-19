import React, { useState, useEffect } from "react";

export interface RatingInputProps {
  value?: number; // Valor actual del rating
  max?: number; // Número máximo de estrellas o corazones
  size?: "xs" | "sm" | "md" | "lg"; // Tamaño del rating
  half?: boolean; // Mostrar medias estrellas
  hidden?: boolean; // Opción para ocultar el input de rating
  shape?: "star" | "heart"; // Forma de las máscaras
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error"; // Colores predefinidos
  onChange?: (value: number) => void; // Función de manejo del cambio
  disabled?: boolean; // Deshabilitar el rating
  className?: string;
}

export const RatingInput: React.FC<RatingInputProps> = ({
  value = 0,
  max = 5,
  size = "md",
  half = false,
  hidden = false,
  shape = "star", // Por defecto, la máscara será "star"
  color = "primary", // Color por defecto
  onChange,
  disabled = false,
  className,
  ...htmlProps
}) => {
  const [ratingValue, setRatingValue] = useState(value);

  useEffect(() => {
    setRatingValue(value);
  }, [value]);

  const handleRatingChange = (newValue: number) => {
    if (!disabled) {
      setRatingValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  // Clases explícitas para los colores (declaradas manualmente para asegurar que Tailwind las genere)
  const colorClasses: Record<string, string> = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
    info: "bg-info",
    success: "bg-success",
    warning: "bg-warning",
    error: "bg-error",
  };

  // Clases explícitas para el tamaño del rating
  const sizeClasses: Record<string, string> = {
    xs: "rating-xs",
    sm: "rating-sm",
    md: "rating-md",
    lg: "rating-lg",
  };

  // Clases explícitas para las formas de las máscaras
  const shapeClasses: Record<string, string> = {
    star: "mask mask-star-2",
    heart: "mask mask-heart",
  };

  // Renderizar el rating con soporte para medias estrellas
  const renderRating = () => {
    const stars = [];
    for (let i = 1; i <= max; i++) {
      const isHalfSelected = ratingValue >= i - 0.5 && ratingValue < i;
      const isFullSelected = ratingValue >= i;

      if (half) {
        // Media estrella izquierda
        stars.push(
          <input
            key={`${i}-half-1`}
            type="radio"
            name="rating"
            className={`${shapeClasses[shape]} mask-half-1 ${colorClasses[color]}`}
            checked={isHalfSelected}
            onChange={() => handleRatingChange(i - 0.5)}
            disabled={disabled}
          />
        );
        // Media estrella derecha
        stars.push(
          <input
            key={`${i}-half-2`}
            type="radio"
            name="rating"
            className={`${shapeClasses[shape]} mask-half-2 ${colorClasses[color]}`}
            checked={isFullSelected}
            onChange={() => handleRatingChange(i)}
            disabled={disabled}
          />
        );
      } else {
        stars.push(
          <input
            key={i}
            type="radio"
            name="rating"
            className={`${shapeClasses[shape]} ${colorClasses[color]}`}
            checked={isFullSelected}
            onChange={() => handleRatingChange(i)}
            disabled={disabled}
          />
        );
      }
    }
    return stars;
  };

  return (
    <div
      className={`rating ${sizeClasses[size]} ${half ? "rating-half" : ""} ${className || ""}`}
      {...htmlProps}
    >
      {hidden && <input type="radio" name="rating" className="rating-hidden" />}
      {renderRating()}
    </div>
  );
};
