import React from "react";

export interface ToastProps extends React.ComponentProps<"div"> {
  alerts: { message: string; type: "info" | "success" | "warning" | "error" }[];
  position?:
    | "top-start"
    | "top-center"
    | "top-end"
    | "middle-start"
    | "middle-center"
    | "middle-end"
    | "bottom-start"
    | "bottom-center"
    | "bottom-end";
}

export const Toast: React.FC<ToastProps> = ({
  alerts,
  position = "bottom-end", // Posición por defecto
  className,
  ...htmlProps
}) => {
  // Mapear las clases de posición
  const positionClasses: Record<string, string> = {
    "top-start": "toast-top toast-start",
    "top-center": "toast-top toast-center",
    "top-end": "toast-top toast-end",
    "middle-start": "toast-middle toast-start",
    "middle-center": "toast-middle toast-center",
    "middle-end": "toast-middle toast-end",
    "bottom-start": "toast-bottom toast-start",
    "bottom-center": "toast-bottom toast-center",
    "bottom-end": "toast-bottom toast-end",
  };

  return (
    <div
      className={[
        "toast",
        positionClasses[position], // Aplicar la clase de posición
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...htmlProps}
    >
      {alerts.map((alert, index) => (
        <div key={index} className={`alert alert-${alert.type}`}>
          <span>{alert.message}</span>
        </div>
      ))}
    </div>
  );
};
