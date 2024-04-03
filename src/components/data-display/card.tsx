import clsx from "clsx";
import React from "react";
import { Button } from "../actions";

interface ActionProps {
  children: React.ReactNode;
}

export interface CardProps extends React.ComponentProps<"div"> {
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  imageMode?: "fill" | "padding" | "overlay";
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
    image: "",
    imageAlt: "",
    imageMode: "fill",
    primaryAction: null,
    secondaryAction: null,
    compact: false,
    neutral: false,
    shadow: true,
    horizontal: false,
  };

  private imageModes = {
    fill: "btn-primary",
    padding: "btn-secondary",
    overlay: "btn-neutral",
  };

  render() {
    const { imageMode, ...htmlProps } = this.props;

    const cardClass = clsx(
      "card w-96",
      {
        "card-compact": this.props.compact,
        "bg-neutral text-neutral-content": this.props.neutral,
        "bg-base-100": !this.props.neutral,
        "shadow-xl": this.props.shadow,
      },
      this.props.className
    );

    const imageClass = clsx(
      "card",
      {
        [`${this.imageModes[imageMode!]}`]: imageMode,
      },
      this.props.className
    );

    return (
      <div className={cardClass} {...htmlProps}>
        <figure className={imageClass}>
          <img src={this.props.image} alt={this.props.imageAlt} />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{this.props.title}</h2>
          <p>{this.props.body}</p>
          {this.props.primaryAction && (
            <div className="card-actions justify-end">
              <Button>{this.props.primaryAction?.children}</Button>
              {this.props.secondaryAction && (
                <div className="card-actions justify-end">
                  <Button mode={"secondary"}>
                    {this.props.secondaryAction.children}
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
