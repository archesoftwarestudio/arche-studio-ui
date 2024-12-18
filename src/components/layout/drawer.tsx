import React from "react";

export interface DrawerProps {
  sideContent?: React.ReactNode;
  children?: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
}

export const Drawer: React.FC<DrawerProps> = ({
  sideContent,
  children,
  open = false,
  onClose,
}) => {
  return (
    <div className="drawer">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        defaultChecked={open}
        onChange={() => onClose?.()}
      />

      <div className="drawer-content">{children}</div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        {sideContent}
      </div>
    </div>
  );
};
