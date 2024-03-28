import clsx from "clsx";
import React from "react";

// Definimos la interfaz de props para el botón.
export interface ButtonProps extends React.ComponentProps<"button"> {
	children: React.ReactNode;
	mode?: "primary" | "secondary" | "neutral" | "accent";
	size?: "large" | "medium" | "small";
	outline?: boolean;
	block?: boolean;
}

// Convertimos el componente a una clase que extiende de React.Component
export class Button extends React.Component<ButtonProps> {
	static modes = {
		primary: "btn-primary",
		secondary: "btn-secondary",
		neutral: "btn-neutral",
		accent: "btn-accent",
	};

	static sizes = {
		large: "btn-lg",
		medium: "btn-md",
		small: "btn-sm",
	};
	// Proporcionamos valores predeterminados para props usando defaultProps
	static defaultProps = {
		mode: "primary",
		size: "medium",
		outline: false,
		block: false,
	};

	render() {
		const {
			mode = "primary",
			block = false,
			outline = false,
			size = "medium",
			children,
			...htmlProps
		} = this.props;

		const className = clsx(
			"btn",
			{
				[`${Button.modes[mode]}`]: mode,
				[`${Button.sizes[size]}`]: size,
				"btn-block": block,
				"btn-outline": outline,
			},
			this.props.className,
		);

		return (
			<button {...htmlProps} className={className}>
				{children || <span>{"Button"}</span>}
			</button>
		);
	}
}
