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
}

export const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  const {
    label,
    items,
    position = "bottom",
    hover = false,
    focus = false,
    end = false,
    rounded = true,
    compact = false,
    shadow = true,
    className,
    icon,
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

  return (
    <div className={dropdownClass} {...htmlProps}>
      <div tabIndex={0} className="btn m-1 flex items-center space-x-2">
        {icon && <span className="icon">{icon}</span>}
        {label && <span>{label}</span>}
      </div>

      <ul tabIndex={0} className={dropdownContentClass}>
        {items.map((item, index) => (
          <li key={index} onClick={item.onClick}>
            {item?.icon && <span className="icon">{item?.icon}</span>}
            <a>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
