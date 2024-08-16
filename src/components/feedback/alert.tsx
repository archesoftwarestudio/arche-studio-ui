import React from "react";

export interface AlertProps extends React.ComponentProps<"div"> {
  message: string;
  type?: "info" | "success" | "warning" | "error";
  withButtons?: boolean;
  onAccept?: () => void;
  onDeny?: () => void;
}

export const Alert: React.FC<AlertProps> = ({
  message,
  type = "info",
  withButtons = false,
  onAccept,
  onDeny,
  className,
  ...htmlProps
}) => {
  // Declarar los íconos explícitamente para cada tipo
  const icons: Record<string, React.ReactNode> = {
    info: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="h-6 w-6 shrink-0 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    success: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="h-6 w-6 shrink-0 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    warning: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="h-6 w-6 shrink-0 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    error: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="h-6 w-6 shrink-0 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  const typeClasses: Record<string, string> = {
    info: "alert-info",
    success: "alert-success",
    warning: "alert-warning",
    error: "alert-error",
  };

  return (
    <div
      role="alert"
      className={["alert", typeClasses[type], className]
        .filter(Boolean)
        .join(" ")}
      {...htmlProps}
    >
      {icons[type]} {/* Se renderiza el ícono basado en el tipo */}
      <span>{message}</span>
      {withButtons && (
        <div className="ml-auto">
          <button className="btn btn-sm mr-2" onClick={onDeny}>
            Deny
          </button>
          <button className="btn btn-sm btn-primary" onClick={onAccept}>
            Accept
          </button>
        </div>
      )}
    </div>
  );
};
