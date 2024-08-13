import React from "react";

export interface AvatarProps extends React.ComponentProps<"div"> {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
  shape?: "circle" | "square" | "rounded";
  border?: boolean;
  borderColor?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
  status?: "online" | "offline";
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "medium",
  shape = "circle",
  border = false,
  borderColor = "primary",
  status,
  className,
  ...htmlProps
}) => {
  // Clases de tamaño predefinidas
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  // Clases de forma predefinidas
  const shapeClasses = {
    circle: "rounded-full",
    square: "rounded-none",
    rounded: "rounded-lg",
  };

  // Declaración explícita de las clases de ring
  const borderClasses = {
    primary: border ? "ring ring-primary ring-offset-2" : "",
    secondary: border ? "ring ring-secondary ring-offset-2" : "",
    accent: border ? "ring ring-accent ring-offset-2" : "",
    info: border ? "ring ring-info ring-offset-2" : "",
    success: border ? "ring ring-success ring-offset-2" : "",
    warning: border ? "ring ring-warning ring-offset-2" : "",
    error: border ? "ring ring-error ring-offset-2" : "",
  };

  // Clases de estado predefinidas
  const statusClasses = {
    online: "online",
    offline: "offline",
  };

  const statusClass = status ? statusClasses[status] : "";
  const borderClass = borderColor ? borderClasses[borderColor] : "";

  // Concatenación de clases
  const avatarClasses = ["avatar", statusClass, className]
    .filter(Boolean)
    .join(" ");

  const avatarImgClasses = [sizeClasses[size], shapeClasses[shape], borderClass]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={avatarClasses} {...htmlProps}>
      <div className={avatarImgClasses}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
