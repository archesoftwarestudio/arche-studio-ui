import React from "react";

export interface MenuItem {
  label: string;
  href?: string;
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
    | "error";
  tooltip?: string;
  submenu?: MenuItem[];
  active?: boolean;
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
      ? "xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max" // Clase especial para mega menú
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
      href,
      icon,
      badge,
      badgeType = "default", // Valor por defecto de badgeType
      tooltip,
      submenu,
      active,
      disabled,
    } = item;

    // Clase del badge basada en el tipo seleccionado
    const badgeClass = badge
      ? `badge badge-${badgeType === "default" ? "" : badgeType}`
      : "";

    const itemClassName = [active ? "active" : "", disabled ? "disabled" : ""]
      .filter(Boolean)
      .join(" ");

    return (
      <li key={label} className={itemClassName}>
        {submenu ? (
          layout === "mega" ? (
            <>
              <a>{label}</a>
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
            <a>
              {icon && icon}
              {label}
            </a>
          )
        ) : (
          <a
            href={href}
            className={tooltip ? `tooltip tooltip-right` : ""}
            data-tip={tooltip}
          >
            {icon && icon}
            {!tooltip && label}
            {badge && <span className={`${badgeClass} ml-2`}>{badge}</span>}
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
