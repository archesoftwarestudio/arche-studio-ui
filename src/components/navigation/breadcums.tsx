import React from "react";

interface BreadcrumbItem {
  label: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  active?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  textSize?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className = "",
  textSize = "text-sm",
}) => {
  return (
    <div className={`breadcrumbs ${textSize} ${className}`}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a
              onClick={item.onClick}
              className={`inline-flex items-center gap-2 ${item.active ? "font-bold" : ""}`}
            >
              {item.icon ?? item.icon}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
