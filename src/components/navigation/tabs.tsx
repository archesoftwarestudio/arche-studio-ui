import React, { useState, useEffect } from "react";

interface TabCustomStyles extends React.CSSProperties {
  "--tab-bg"?: string;
  "--tab-border-color"?: string;
  "--tab-text-color"?: string;
}

// Extender el tipo TabItem para soportar el formato anterior
interface TabItem {
  label: React.ReactNode;
  content?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  isActive?: boolean;
  disabled?: boolean;
  customStyles?: TabCustomStyles;
}

type Variant = "boxed" | "bordered" | "lifted";
type Size = "xs" | "sm" | "md" | "lg";

export interface TabsProps extends React.ComponentProps<"div"> {
  items: TabItem[];
  defaultActiveIndex?: number;
  onTabChange?: (index: number) => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  useRadio?: boolean;
  name?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveIndex = 0,
  onTabChange,
  variant,
  size,
  className = "",
  useRadio = false,
  name,
  ...divProps
}) => {
  // Determinar el índice activo inicial basado en `isActive` o `defaultActiveIndex`
  const [activeIndex, setActiveIndex] = useState(
    items.findIndex((item) => item.isActive) !== -1
      ? items.findIndex((item) => item.isActive)
      : defaultActiveIndex
  );

  useEffect(() => {
    if (activeIndex >= items.length) {
      setActiveIndex(0);
    }
  }, [items, activeIndex]);

  const handleTabChange = (
    index: number,
    event?: React.MouseEvent | React.ChangeEvent
  ) => {
    const item = items[index];
    if (item.disabled) return;

    if (item.onClick) {
      // Si el tab tiene `onClick`, se llama a esta función
      item.onClick(event as React.MouseEvent);
    } else {
      // Cambiar el tab activo
      setActiveIndex(index);
      if (onTabChange) {
        onTabChange(index);
      }
    }
  };

  const variantClass: Record<Variant, string> = {
    boxed: "tabs-boxed",
    bordered: "tabs-bordered",
    lifted: "tabs-lifted",
  };

  const sizeClass: Record<Size, string> = {
    xs: "tabs-xs",
    sm: "tabs-sm",
    md: "tabs-md",
    lg: "tabs-lg",
  };

  const finalClassName = [
    "tabs",
    variant ? variantClass[variant] : "",
    size ? sizeClass[size] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const contentClass = [
    "tab-content",
    variant === "lifted" ? "border-base-300 rounded-box p-6" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div {...divProps}>
      <div role="tablist" className={finalClassName}>
        {items.map((item, index) => {
          const isActive = item.isActive ?? index === activeIndex;
          const tabClasses = [
            "tab",
            variant === "lifted" ? "" : "",
            isActive ? "tab-active" : "",
            item.disabled ? "tab-disabled" : "",
          ]
            .filter(Boolean)
            .join(" ");

          const labelContent = (
            <>
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
            </>
          );

          if (useRadio) {
            return (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  name={name}
                  role="tab"
                  className={tabClasses}
                  aria-label={item.label as string}
                  checked={isActive}
                  onChange={(event) => handleTabChange(index, event)}
                  disabled={item.disabled}
                  style={item.customStyles}
                />
                <div
                  role="tabpanel"
                  className={contentClass}
                  hidden={!isActive}>
                  {item.content}
                </div>
              </React.Fragment>
            );
          } else {
            return (
              <button
                key={index}
                role="tab"
                className={tabClasses}
                onClick={(event) => handleTabChange(index, event)}
                aria-selected={isActive}
                aria-disabled={item.disabled}
                style={item.customStyles}>
                {labelContent}
              </button>
            );
          }
        })}
      </div>
      {!useRadio && (
        <div role="tabpanel" className={contentClass}>
          {items[activeIndex]?.content}
        </div>
      )}
    </div>
  );
};
