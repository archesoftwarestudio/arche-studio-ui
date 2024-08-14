import React from "react";

export interface MenuItemProps extends React.ComponentProps<"li"> {
  active?: boolean;
  disabled?: boolean;
  focus?: boolean;
  label: string;
  icon?: React.ReactNode;
  submenu?: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  active = false,
  disabled = false,
  focus = false,
  label,
  icon,
  submenu,
  className,
  ...htmlProps
}) => {
  const finalClassName = [
    active ? "active" : "",
    disabled ? "disabled" : "",
    focus ? "focus" : "",
    submenu ? "menu-dropdown-toggle" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <li className={finalClassName} {...htmlProps}>
      <a className="flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </a>
      {submenu && <ul className="menu-dropdown p-2 bg-base-100">{submenu}</ul>}
    </li>
  );
};

export interface MenuProps extends React.ComponentProps<"ul"> {
  title?: string;
  horizontal?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  bgColor?: "base-100" | "base-200" | "base-300" | "neutral";
  rounded?:
    | "rounded-none"
    | "rounded-sm"
    | "rounded-md"
    | "rounded-lg"
    | "rounded-box";
  width?: "w-32" | "w-48" | "w-56" | "w-64";
  items: MenuItemProps[];
}

export const Menu: React.FC<MenuProps> = ({
  title,
  horizontal = false,
  size = "md",
  bgColor = "base-100",
  rounded = "rounded-box",
  width = "w-56",
  items,
  className,
  ...htmlProps
}) => {
  const finalClassName = [
    "menu",
    horizontal ? "menu-horizontal" : "menu-vertical",
    `menu-${size}`,
    `bg-${bgColor}`,
    rounded,
    !horizontal && width ? width : "", // Aplicar width solo si no es horizontal
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ul className={finalClassName} {...htmlProps}>
      {title && <li className="menu-title">{title}</li>}
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </ul>
  );
};
