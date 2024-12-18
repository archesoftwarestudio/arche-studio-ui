import React, { useEffect, useRef } from "react";

export interface DrawerProps {
  sideContent?: React.ReactNode;
  children?: React.ReactNode;
  open?: boolean;
  onClose?: () => void; // Callback para cerrar el drawer
}

export const Drawer: React.FC<DrawerProps> = ({
  sideContent,
  children,
  open = false,
  onClose,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Sincronizar el estado externo con el estado del checkbox
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.checked = open; // Forzar el estado del checkbox
    }
  }, [open]);

  // Detectar cambios en el estado interno y propagar el cierre
  const handleChange = () => {
    if (inputRef.current && !inputRef.current.checked) {
      onClose?.(); // Llama al callback si se cierra
    }
  };

  return (
    <div className="drawer">
      {/* Sincronizar el estado */}
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        ref={inputRef}
        onChange={handleChange} // Detectar cambios internos
      />

      <div className="drawer-content">{children}</div>

      <div className="drawer-side">
        {/* Overlay para cerrar */}
        <label
          htmlFor="my-drawer"
          className="drawer-overlay"
          onClick={onClose} // Llama a `onClose` al hacer clic en el overlay
        ></label>
        {sideContent}
      </div>
    </div>
  );
};
