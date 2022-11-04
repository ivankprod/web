import React, { ComponentProps, ElementType, ReactNode } from "react"
import { Link } from "gatsby"

import "../../styles/components/controls/button.css"

export enum ButtonSize {
	small = "small",
	middle = "middle"
}

interface ButtonOwnProps<E extends ElementType = ElementType> {
	children?: ReactNode
	as?: E
	size?: string
}

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> & Omit<ComponentProps<E>, keyof ButtonOwnProps>

const defaultElement = Link;

const Button: React.FC<ButtonProps<ElementType>> = <E extends ElementType = typeof defaultElement>({
	children = undefined, as, size = undefined, ...otherProps
}: ButtonProps<E>) => {
	const TagName = as || defaultElement;

	return (
		<TagName className={"abutton rounded-all" + (size ? " " + size : "")} {...otherProps}>
			{children}
		</TagName> 
	)
}

export default Button
