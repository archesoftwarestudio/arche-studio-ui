import React, { useState, useEffect } from "react";

// Extensión de React.CSSProperties para soportar propiedades personalizadas como --tab-bg
interface CustomCSSProperties extends React.CSSProperties {
  [key: `--${string}`]: string | number;
}

interface TabItem {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  customStyles?: CustomCSSProperties; // Ahora acepta propiedades CSS personalizadas
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
  name?: string; // Para los inputs de tipo radio
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
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  useEffect(() => {
    if (activeIndex >= items.length) {
      setActiveIndex(0);
    }
  }, [items, activeIndex]);

  const handleTabChange = (index: number) => {
    if (!items[index].disabled) {
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

  return (
    <div {...divProps}>
      <div role="tablist" className={finalClassName}>
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          const tabClasses = [
            "tab",
            isActive ? "tab-active" : "",
            item.disabled ? "tab-disabled" : "",
          ]
            .filter(Boolean)
            .join(" ");

          if (useRadio) {
            return (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  name={name}
                  role="tab"
                  className={tabClasses}
                  aria-label={item.label}
                  checked={isActive}
                  onChange={() => handleTabChange(index)}
                  disabled={item.disabled}
                  style={item.customStyles}
                />
                <div
                  role="tabpanel"
                  className="tab-content p-4"
                  hidden={!isActive}
                >
                  {item.content}
                </div>
              </React.Fragment>
            );
          } else {
            return (
              <a
                key={index}
                role="tab"
                className={tabClasses}
                onClick={() => handleTabChange(index)}
                aria-selected={isActive}
                aria-disabled={item.disabled}
                style={item.customStyles}
              >
                {item.label}
              </a>
            );
          }
        })}
      </div>
      {!useRadio && (
        <div className="tab-content p-4">{items[activeIndex]?.content}</div>
      )}
    </div>
  );
};
