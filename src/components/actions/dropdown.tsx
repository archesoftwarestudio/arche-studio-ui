import clsx from "clsx";
import React from "react";

type DropdownItemProps = {
  text: string;
  icon?: React.ReactNode;
  onClick: () => void;
};

export interface DropdownProps extends React.ComponentProps<"div"> {
  label?: string;
  items: DropdownItemProps[];
  position?: "top" | "bottom" | "left" | "right";
  hover?: boolean;
  focus?: boolean;
  end?: boolean;
  rounded?: boolean;
  compact?: boolean;
  shadow?: boolean;
  icon?: React.ReactNode;
  size?: "large" | "medium" | "small" | "extra-small";
  optionBackgroundColor?: string;
}

export const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  const {
    label,
    items,
    position = "bottom",
    size = "medium",
    hover = false,
    focus = false,
    end = false,
    rounded = true,
    compact = false,
    shadow = true,
    className,
    icon,
    optionBackgroundColor = "transparent",
    ...htmlProps
  } = props;

  const dropdownClass = clsx(
    "dropdown",
    {
      "dropdown-hover": hover,
      "dropdown-focus": focus,
      "dropdown-end": end,
      [`dropdown-${position}`]: position,
    },
    className
  );

  const dropdownContentClass = clsx("dropdown-content", {
    menu: true,
    "p-2": !compact,
    shadow: shadow,
    "rounded-box": rounded,
    "w-52": !compact,
  });

  const buttonSizes = {
    large: "btn-lg",
    medium: "btn-md",
    small: "btn-sm",
    "extra-small": "btn-xs",
  };

  const iconSizes = {
    large: "w-6 h-6",
    medium: "w-5 h-5",
    small: "w-4 h-4",
    "extra-small": "w-3 h-3",
  };

  const buttonShape = label ? "flex items-center space-x-1" : "btn-square";

  return (
    <div className={dropdownClass} {...htmlProps}>
      <div tabIndex={0} className={clsx("btn", buttonShape, buttonSizes[size])}>
        {icon && <span className={clsx("icon", iconSizes[size])}>{icon}</span>}
        {label && <span>{label}</span>}
      </div>

      <ul
        tabIndex={0}
        className={dropdownContentClass}
        style={{ backgroundColor: optionBackgroundColor }}
      >
        {items.map((item, index) => (
          <li key={index} onClick={item.onClick}>
            <a>
              {item?.icon && (
                <span className={clsx("icon", iconSizes[size])}>
                  {item.icon}
                </span>
              )}
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
