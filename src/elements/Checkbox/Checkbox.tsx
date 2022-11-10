import React, { ReactNode } from "react"
import clsx from "clsx"

import { BaseInputProps } from "../../models/element"

import "./Checkbox.css"

interface CheckboxOwnProps extends BaseInputProps {
	children?: ReactNode
}

type CheckboxProps = CheckboxOwnProps
	& Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, keyof CheckboxOwnProps>

const Checkbox: React.FC<CheckboxProps> = ({
	children = undefined,
	validable = false,
	validityError = undefined,
	...otherProps
}: CheckboxProps) => {
	const parentOnChange = otherProps.onChange;
	otherProps.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		parentOnChange?.(e);

		if (validable) e.target.className = clsx({ "error-input-required": !e.target.checked });
	}

	return (
		<>
			<input type="checkbox" className={clsx({ "error-input-required": validityError })} {...otherProps} />
			<label htmlFor={otherProps.id}>{children}</label>
		</>
	)
}

export default Checkbox
