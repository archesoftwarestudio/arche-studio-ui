import React, { useState } from "react";

export interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen?: boolean;
  disabled?: boolean;
  customIcon?: React.ReactNode;
}

export interface AccordionProps extends React.ComponentProps<"div"> {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className,
  ...htmlProps
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    items
      .map((item, index) => (item.isOpen ? index : null))
      .filter((index) => index !== null) as number[]
  );

  const handleToggle = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else if (allowMultiple) {
      setOpenIndexes([...openIndexes, index]);
    } else {
      setOpenIndexes([index]);
    }
  };

  return (
    <div className={className} {...htmlProps}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div
            key={index}
            className={`collapse border border-base-300 bg-base-100 rounded-box mb-2 ${
              isOpen ? "collapse-open" : "collapse-close"
            } ${item.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <div
              className="collapse-title text-xl font-medium flex items-center"
              onClick={() => !item.disabled && handleToggle(index)}
            >
              {item.customIcon && (
                <span className="mr-2">{item.customIcon}</span>
              )}
              {item.title}
            </div>
            <div className="collapse-content">
              <div className="py-2">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
