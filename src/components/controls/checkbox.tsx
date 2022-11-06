import React, { ReactNode } from "react"

import BaseInputProps from "../../models/controls"

import "../../styles/components/controls/checkbox.css"

interface CheckboxOwnProps extends BaseInputProps {
	children?: ReactNode
}

type CheckboxProps = CheckboxOwnProps
	& Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, keyof CheckboxOwnProps>

const Checkbox: React.FC<CheckboxProps> = ({
	inForm = false,
	validable = false,
	validityError = undefined,
	children = undefined,
	...otherProps
}: CheckboxProps) => {
	const parentOnChange = otherProps.onChange;
	otherProps.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		parentOnChange?.(e);

		if (validable) e.target.className = !e.target.checked ? "error-input-required" : "";
	}

	return (
		<>
			{inForm
				? (
					<div className="form-row">
						<input type="checkbox" className={validityError ? "error-input-required" : ""} {...otherProps} />
						<label htmlFor={otherProps.id}>{children}</label>
					</div>
				) : (
					<>
						<input type="checkbox" className={validityError ? "error-input-required" : ""} {...otherProps} />
						<label htmlFor={otherProps.id}>{children}</label>
					</>
				)
			}
		</>
	)
}

export default Checkbox
