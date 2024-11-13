import React from "react";

export interface DrawerProps {
  sideContent?: React.ReactNode;
  children?: React.ReactNode;
  open?: boolean;
}

export const Drawer: React.FC<DrawerProps> = ({
  sideContent,
  children,
  open = false,
}) => {
  return (
    <div className="drawer">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        defaultChecked={open}
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
