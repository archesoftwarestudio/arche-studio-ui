import React from "react";

export interface NavbarProps extends React.ComponentProps<"div"> {
  start?: React.ReactNode;
  center?: React.ReactNode;
  end?: React.ReactNode;
  variant?: "base-100" | "neutral" | "primary";
  gap?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  start,
  center,
  end,
  variant = "base-100",
  gap = false,
  className,
  ...htmlProps
}) => {
  const variantClasses: Record<string, string> = {
    "base-100": "bg-base-100 text-base-content",
    neutral: "bg-neutral text-neutral-content",
    primary: "bg-primary text-primary-content",
  };

  const gapClass = gap ? "gap-2" : "";

  const finalClassName = [
    "navbar w-full",
    variantClasses[variant],
    gapClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={finalClassName} {...htmlProps}>
      {start && <div className="navbar-start flex items-center">{start}</div>}
      {center && (
        <div className="navbar-center flex items-center">{center}</div>
      )}
      {end && <div className="navbar-end flex items-center">{end}</div>}
    </div>
  );
};
