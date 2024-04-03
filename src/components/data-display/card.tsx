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
  imageMode?: "standard" | "padding" | "overlay";
  primaryAction?: ActionProps;
  secondaryAction?: ActionProps;
  compact?: boolean;
  neutral?: boolean;
  shadow?: boolean;
  horizontal?: boolean;
}

export class Card extends React.Component<CardProps> {
  static defaultProps = {
    title: "",
    body: "",
    imageUrl: "",
    imageAlt: "",
    imageMode: "standard",
    primaryAction: null,
    secondaryAction: null,
    compact: false,
    neutral: false,
    shadow: true,
    horizontal: false,
  };

  private cardImageMode = {
    standard: "",
    padding: "",
    overlay: "image-full",
  };

  private figureImageMode = {
    standard: "",
    padding: "px-10 pt-10",
    overlay: "",
  };

  private imageMode = {
    standard: "",
    padding: "rounded-xl",
    overlay: "",
  };

  private bodyImageMode = {
    standard: "",
    padding: "items-center text-center",
    overlay: "",
  };

  render() {
    const { imageMode, horizontal, ...htmlProps } = this.props;

    const cardClass = clsx(
      "card",
      {
        "card-compact": this.props.compact,
        "bg-neutral text-neutral-content": this.props.neutral,
        "bg-base-100": !this.props.neutral,
        "shadow-xl": this.props.shadow,
        [`${this.cardImageMode[imageMode!]}`]: imageMode,
        "card-side": horizontal,
        "w-96": !horizontal,
      },
      this.props.className
    );

    const figureClass = clsx("", {
      [`${this.figureImageMode[imageMode!]}`]: imageMode,
    });

    const imageClass = clsx("", {
      [`${this.imageMode[imageMode!]}`]: imageMode,
    });

    const bodyClass = clsx("card-body", {
      [`${this.bodyImageMode[imageMode!]}`]: imageMode,
    });

    return (
      <div className={cardClass} {...htmlProps}>
        {this.props.imageUrl && (
          <figure className={figureClass}>
            <img
              src={this.props.imageUrl}
              alt={this.props.imageAlt}
              className={imageClass}
            />
          </figure>
        )}
        <div className={bodyClass}>
          <h2 className="card-title">{this.props.title}</h2>
          <p>{this.props.body}</p>
          {this.props.primaryAction && (
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={this.props.primaryAction.onClick}
              >
                {this.props.primaryAction.text}
              </button>
              {this.props.secondaryAction && (
                <button
                  className="btn btn-secondary"
                  onClick={this.props.primaryAction.onClick}
                >
                  {this.props.primaryAction.text}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
