import clsx from "clsx";
import React from "react";

type DropdownItemProps = {
  text: string;
  onClick: () => void;
};

export interface DropdownProps extends React.ComponentProps<"div"> {
  label: string;
  items: DropdownItemProps[];
  position?: "top" | "bottom" | "left" | "right";
  hover?: boolean;
  focus?: boolean;
  end?: boolean;
  rounded?: boolean;
  compact?: boolean;
  shadow?: boolean;
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
      <label tabIndex={0} className="btn m-1">
        {label}
      </label>
      <ul tabIndex={0} className={dropdownContentClass}>
        {items.map((item, index) => (
          <li key={index}>
            <a onClick={item.onClick}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
