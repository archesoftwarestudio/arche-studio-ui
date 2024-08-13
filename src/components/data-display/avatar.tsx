import React from "react";

export interface AvatarProps extends React.ComponentProps<"div"> {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
  shape?: "circle" | "square" | "rounded";
  border?: boolean;
  status?: "online" | "offline";
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "medium",
  shape = "circle",
  border = false,
  status,
  className,
  ...htmlProps
}) => {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  const shapeClasses = {
    circle: "rounded-full",
    square: "rounded-none",
    rounded: "rounded-lg",
  };

  const borderClass = border ? "ring ring-primary" : "";
  const statusClass =
    status === "online" ? "online" : status === "offline" ? "offline" : "";

  return (
    <div className={`avatar ${className} ${statusClass}`} {...htmlProps}>
      <div
        className={`avatar-img ${sizeClasses[size]} ${shapeClasses[shape]} ${borderClass}`}
      >
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
