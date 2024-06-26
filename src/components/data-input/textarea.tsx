import clsx from "clsx";
import React from "react";

export interface TextAreaProps extends React.ComponentProps<"textarea"> {
  label?: string;
  placeholder?: string;
  initialValue?: string;
  border?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "warning"
    | "error"
    | "success";
  size?: "large" | "medium" | "small" | "extra-small";
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: React.FC<TextAreaProps> = (
  props: TextAreaProps = {
    initialValue: "",
    placeholder: "",
    size: "large",
    variant: "primary",
    border: true,
    onChange: () => {},
  }
) => {
  const {
    variant = "primary",
    size = "large",
    placeholder = "",
    border = true,
    onChange = () => {},
    initialValue = "",
    className,
    ...htmlProps
  } = props;

  const [value, setValue] = React.useState(initialValue);

  const sizes = {
    large: "textarea-lg",
    medium: "textarea-md",
    small: "textarea-sm",
    "extra-small": "textarea-xs",
  };

  const variants = {
    primary: "textarea-primary",
    secondary: "textarea-secondary",
    accent: "textarea-accent",
    info: "textarea-info",
    warning: "textarea-warning",
    error: "textarea-error",
    success: "textarea-success",
  };

  const componentClass = clsx(
    "textarea",
    {
      [`${sizes[size!]}`]: size,
      [`${variants[variant!]}`]: variant,
      "textarea-bordered": border,
    },
    className
  );

  return (
    <textarea
      className={componentClass}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
        onChange(event);
      }}
      placeholder={placeholder}
      {...htmlProps}
    ></textarea>
  );
};
