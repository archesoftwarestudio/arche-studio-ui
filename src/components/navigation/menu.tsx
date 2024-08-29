import React from "react";

export interface MenuItem extends React.ComponentProps<"li"> {
  label: string;
  icon?: React.ReactNode;
  badge?: string | React.ReactNode;
  badgeType?:
    | "default"
    | "neutral"
    | "primary"
    | "secondary"
    | "accent"
    | "ghost"
    | "info"
    | "success"
    | "warning"
    | "error"; // Añadir más opciones para el tipo de badge
  tooltip?: string;
  submenu?: MenuItem[];
  active?: boolean; // Para marcar el item como activo
  disabled?: boolean;
}

export interface MenuProps extends React.ComponentProps<"ul"> {
  items: MenuItem[];
  title?: string; // Título del menú
  layout?: "vertical" | "horizontal" | "mega"; // Disposición del menú
  responsive?: boolean; // Si es responsive
  size?: "menu-xs" | "menu-sm" | "menu-md" | "menu-lg"; // Tamaños del menú
  collapsible?: boolean; // Si los submenús deben ser colapsables
  showSubmenu?: boolean; // Si se muestran los submenús
  containerWidth?: "w-24" | "w-48" | "w-56" | "w-64" | "w-full"; // Ancho opcional del menú
  className?: string;
}

export const Menu: React.FC<MenuProps> = ({
  items,
  title,
  layout = "vertical",
  responsive = false,
  size = "menu-md",
  collapsible = false,
  showSubmenu = false,
  containerWidth,
  className,
  ...htmlProps
}) => {
  const layoutClass =
    layout === "mega"
      ? "xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max"
      : responsive
        ? `menu-${layout === "horizontal" ? "vertical lg:menu-horizontal" : layout}`
        : `menu-${layout}`;

  const finalClassName = [
    "menu",
    layoutClass,
    size,
    containerWidth,
    "bg-base-200 rounded-box",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Función para renderizar los elementos del menú
  const renderMenuItem = (item: MenuItem) => {
    const {
      label,
      icon,
      badge,
      badgeType = "default", // Valor por defecto de badgeType
      tooltip,
      submenu,
      active, // Estado activo
      disabled,
      ...liProps // Captura todos los demás props que se puedan pasar a li
    } = item;

    const badgeClass = badge
      ? `badge badge-${badgeType === "default" ? "" : badgeType}`
      : "";
    const itemClassName = [disabled ? "disabled" : ""]
      .filter(Boolean)
      .join(" ");
    const linkClassName = [
      active ? "active" : "",
      tooltip ? "tooltip tooltip-right" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <li key={label} className={itemClassName} {...liProps}>
        {submenu ? (
          layout === "mega" ? (
            <>
              <a className={linkClassName}>{label}</a>
              <ul className="bg-base-200">
                {submenu.map((subItem) => renderMenuItem(subItem))}
              </ul>
            </>
          ) : collapsible ? (
            <details open={showSubmenu}>
              <summary>{label}</summary>
              <ul>{submenu.map((subItem) => renderMenuItem(subItem))}</ul>
            </details>
          ) : (
            <a className={linkClassName}>
              {icon && icon}
              {label}
            </a>
          )
        ) : (
          <a
            className={linkClassName}
            data-tip={tooltip}
            onClick={() => liProps.onClick}
          >
            {icon && icon}
            {!tooltip && label}
            {badge && (
              <span className={`${badgeClass} gap-2 ml-2`}>{badge}</span>
            )}
          </a>
        )}
      </li>
    );
  };

  return (
    <ul className={finalClassName} {...htmlProps}>
      {title && <li className="menu-title">{title}</li>}
      {items.map((item) => renderMenuItem(item))}
    </ul>
  );
};
