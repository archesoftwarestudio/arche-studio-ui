import React from "react";

export interface TableProps extends React.ComponentProps<"table"> {
  variant?: "zebra";
  pinRows?: boolean;
  pinCols?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
}

export const Table: React.FC<TableProps> = ({
  children,
  variant,
  pinRows = false,
  pinCols = false,
  size = "md",
  className,
  ...htmlProps
}) => {
  const variantClasses: Record<string, string> = {
    zebra: "table-zebra",
  };

  const pinRowsClasses: Record<string, string> = {
    true: "table-pin-rows",
    false: "",
  };

  const pinColsClasses: Record<string, string> = {
    true: "table-pin-cols",
    false: "",
  };

  const sizeClasses: Record<string, string> = {
    xs: "table-xs",
    sm: "table-sm",
    md: "table-md",
    lg: "table-lg",
  };

  const finalClassName = [
    "table",
    variant ? variantClasses[variant] : "",
    pinRowsClasses[String(pinRows)],
    pinColsClasses[String(pinCols)],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="overflow-x-auto">
      <table className={finalClassName} {...htmlProps}>
        {children}
      </table>
    </div>
  );
};

export const TableHead: React.FC<React.ComponentProps<"thead">> = ({
  children,
  className,
  ...htmlProps
}) => {
  return (
    <thead className={className} {...htmlProps}>
      {children}
    </thead>
  );
};

export const TableBody: React.FC<React.ComponentProps<"tbody">> = ({
  children,
  className,
  ...htmlProps
}) => {
  return (
    <tbody className={className} {...htmlProps}>
      {children}
    </tbody>
  );
};

export const TableRow: React.FC<React.ComponentProps<"tr">> = ({
  children,
  className,
  ...htmlProps
}) => {
  return (
    <tr className={className} {...htmlProps}>
      {children}
    </tr>
  );
};

export const TableCell: React.FC<React.ComponentProps<"td">> = ({
  children,
  className,
  ...htmlProps
}) => {
  return (
    <td className={className} {...htmlProps}>
      {children}
    </td>
  );
};

export const TableHeaderCell: React.FC<React.ComponentProps<"th">> = ({
  children,
  className,
  ...htmlProps
}) => {
  return (
    <th className={`font-bold ${className || ""}`} {...htmlProps}>
      {children}
    </th>
  );
};
