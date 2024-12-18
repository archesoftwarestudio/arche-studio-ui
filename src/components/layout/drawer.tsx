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
    <div className={`drawer ${open ? "drawer-open" : ""}`}>
      <div className="drawer-content">{children}</div>

      {open && (
        <div className="drawer-side">
          <label className="drawer-overlay" onClick={onClose}></label>
          {sideContent}
        </div>
      )}
    </div>
  );
};
