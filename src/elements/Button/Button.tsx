import React, { ComponentProps, ElementType, ReactNode } from "react"
import { Link } from "gatsby"
import clsx from "clsx"

import { ButtonSize } from "../../models/element"

import "./Button.css"

interface ButtonOwnProps<E extends ElementType = ElementType> {
	children?: ReactNode,
	as?: E,
	size?: ButtonSize
}

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> & Omit<ComponentProps<E>, keyof ButtonOwnProps>

const defaultElement = Link;

const Button: React.FC<ButtonProps<ElementType>> = <E extends ElementType = typeof defaultElement>({
	children = undefined,
	as = undefined,
	size = undefined,
	...otherProps
}: ButtonProps<E>) => {
	const TagName = as || defaultElement;

	return (
		<TagName className={clsx("abutton", { size: size }, "rounded-all")} {...otherProps}>
			{children}
		</TagName>
	)
}

export default Button
