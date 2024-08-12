import React, { ComponentProps, ElementType } from "react";
import clsx from "clsx";
import { Link } from "gatsby";

import { ButtonSize } from "models/element";

import "./Button.scss";

interface ButtonOwnProps<E extends ElementType = ElementType>
	extends React.PropsWithChildren {
	as?: E;
	size?: ButtonSize;
}

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
	Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = Link;

export const Button: React.FC<ButtonProps<ElementType>> = <
	E extends ElementType = typeof defaultElement
>({
	as = undefined,
	size = undefined,
	children = undefined,
	...otherProps
}: ButtonProps<E>) => {
	const TagName = as || defaultElement;

	return (
		<TagName
			{...otherProps}
			className={clsx(
				"abutton",
				size,
				"rounded-all",
				otherProps.className
			)}
		>
			{children}
		</TagName>
	);
};

export default Button;
