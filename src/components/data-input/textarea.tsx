import React from "react";

export interface TextAreaProps extends React.ComponentProps<"textarea"> {
  label?: string;
  placeholder?: string;
  initialValue?: string;
  border?: boolean;
  ghost?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "warning"
    | "error"
    | "success"
    | "";
  size?: "lg" | "md" | "sm" | "xs";
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  variant = "", // Permitir que no se defina una variante
  size = "md",
  placeholder = "",
  border = false, // Estilo por defecto sin bordes
  ghost = false,
  disabled = false,
  readOnly = false,
  required = false,
  onChange = () => {},
  initialValue = "",
  className,
  ...htmlProps
}) => {
  const [value, setValue] = React.useState(initialValue);

  // Asignación de clases para tamaño
  const sizeClass =
    size === "lg"
      ? "textarea-lg"
      : size === "sm"
        ? "textarea-sm"
        : size === "xs"
          ? "textarea-xs"
          : "textarea-md";

  // Asignación de clases para variantes, permitiendo que no haya variante
  const variantClass = variant ? `textarea-${variant}` : "";

  // Asignación de clases para border y ghost
  const borderClass = border ? "textarea-bordered" : "";
  const ghostClass = ghost ? "textarea-ghost" : "";

  // Clase para disabled
  const disabledClass = disabled ? "cursor-not-allowed opacity-50" : "";

  // Construcción de la clase final
  const componentClass = [
    "textarea",
    sizeClass,
    variantClass,
    borderClass,
    ghostClass,
    disabledClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      {label && (
        <label className="block mb-2 text-sm font-medium">{label}</label>
      )}
      <textarea
        className={componentClass}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          onChange(event);
        }}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        {...htmlProps}
      ></textarea>
    </div>
  );
};
