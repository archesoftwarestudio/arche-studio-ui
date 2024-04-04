import clsx from "clsx";
import React from "react";

type ActionProps = {
  text: string;
  onClick: () => void;
};

export interface CardProps extends React.ComponentProps<"div"> {
  title: string;
  body: string;
  imageUrl?: string;
  imageAlt?: string;
  imageMode?: "default" | "padding" | "overlay";
  primaryAction?: ActionProps;
  secondaryAction?: ActionProps;
  compact?: boolean;
  neutral?: boolean;
  shadow?: boolean;
  horizontal?: boolean;
  responsive?: boolean;
}

export const Card: React.FC<CardProps> = (
  props: CardProps = {
    title: "",
    body: "",
    imageUrl: "",
    imageAlt: "",
    imageMode: "default",
    compact: false,
    neutral: false,
    shadow: true,
    horizontal: false,
    responsive: false,
  }
) => {
  const cardImageModes = {
    default: "",
    padding: "",
    overlay: "image-full",
  };

  const figureImageModes = {
    default: "",
    padding: "px-10 pt-10",
    overlay: "",
  };

  const imageModes = {
    default: "",
    padding: "rounded-xl",
    overlay: "",
  };

  const bodyImageModes = {
    default: "",
    padding: "items-center text-center",
    overlay: "",
  };

  const {
    imageMode,
    horizontal,
    compact,
    neutral,
    shadow,
    body,
    title,
    imageAlt,
    imageUrl,
    primaryAction,
    secondaryAction,
    responsive,
    ...htmlProps
  } = props;

  const cardClass = clsx(
    "card",
    {
      "card-compact": compact,
      "bg-neutral text-neutral-content": neutral,
      "bg-base-100": !neutral,
      "shadow-xl": shadow,
      [`${cardImageModes[imageMode!]}`]: imageMode,
      "card-side": !responsive && horizontal,
      "w-96": !responsive && !horizontal,
      "lg:card-side": responsive,
    },
    htmlProps.className
  );

  const figureClass = clsx("", {
    [`${figureImageModes[imageMode!]}`]: imageMode,
  });

  const imageClass = clsx("", {
    [`${imageModes[imageMode!]}`]: imageMode,
  });

  const bodyClass = clsx("card-body", {
    [`${bodyImageModes[imageMode!]}`]: imageMode,
  });

  return (
    <div className={cardClass} {...htmlProps}>
      {imageUrl && (
        <figure className={figureClass}>
          <img src={imageUrl} alt={imageAlt} className={imageClass} />
        </figure>
      )}
      <div className={bodyClass}>
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        {primaryAction && (
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={primaryAction.onClick}>
              {primaryAction.text}
            </button>
            {secondaryAction && (
              <button
                className="btn btn-secondary"
                onClick={primaryAction.onClick}
              >
                {primaryAction.text}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
