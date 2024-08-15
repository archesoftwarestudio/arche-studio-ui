import React from "react";

export interface StepItemProps {
  label: string;
  completed?: boolean;
  active?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
}

export interface StepsProps extends React.ComponentProps<"ul"> {
  steps: StepItemProps[];
  direction?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
}

export const Steps: React.FC<StepsProps> = ({
  steps,
  direction = "horizontal",
  size = "md",
  className,
  ...htmlProps
}) => {
  // Declaramos los estilos en variables o mapas
  const sizeClasses: Record<string, string> = {
    sm: "step-sm",
    md: "step-md",
    lg: "step-lg",
  };

  const directionClasses: Record<string, string> = {
    horizontal: "steps-horizontal",
    vertical: "steps-vertical",
  };

  const colorClasses: Record<string, string> = {
    primary: "step-primary",
    secondary: "step-secondary",
    accent: "step-accent",
    info: "step-info",
    success: "step-success",
    warning: "step-warning",
    error: "step-error",
  };

  return (
    <ul
      className={["steps", directionClasses[direction], className]
        .filter(Boolean)
        .join(" ")}
      {...htmlProps}
    >
      {steps.map((step, index) => (
        <li
          key={index}
          className={[
            "step",
            step.completed ? colorClasses[step.color || "primary"] : "",
            step.active ? "step-active" : "",
            sizeClasses[size],
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {step.label}
        </li>
      ))}
    </ul>
  );
};
