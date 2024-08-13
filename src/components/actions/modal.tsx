import clsx from "clsx";
import React from "react";

export interface ModalProps extends React.ComponentProps<"div"> {
  isOpen: boolean;
  onClose: () => void;
  size?: "default" | "small" | "large";
  position?: "middle" | "bottom";
  children: React.ReactNode;
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
  showActions?: boolean;
  actions?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const {
    isOpen,
    onClose,
    size = "default",
    position = "middle",
    children,
    closeOnOverlayClick = true,
    showCloseButton = true,
    showActions = false,
    actions,
    className,
    ...htmlProps
  } = props;

  const modalClass = clsx("modal", {
    "modal-open": isOpen,
    "modal-bottom": position === "bottom",
  });

  const modalBoxClass = clsx(
    "modal-box",
    {
      "w-11/12 max-w-sm": size === "small",
      "w-11/12 max-w-5xl": size === "large",
      "max-h-[calc(100vh-2rem)] overflow-y-auto": true, // Para manejar overflow y asegurar el tamaño correcto
    },
    className
  );

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={modalClass} onClick={handleOverlayClick} {...htmlProps}>
      <div className={modalBoxClass}>
        {showCloseButton && (
          <button
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        )}
        {children}
        {showActions && <div className="modal-action">{actions}</div>}
      </div>
    </div>
  );
};
