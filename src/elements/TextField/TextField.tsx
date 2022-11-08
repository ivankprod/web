import React from "react"

import BaseInputProps from "../../models/controls"

import "./TextField.css"

type TextFieldProps = BaseInputProps
	& Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, keyof BaseInputProps>
type TextAreaProps = BaseInputProps
	& Omit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, keyof BaseInputProps>

export const TextField: React.FC<TextFieldProps> = ({
	inForm = false,
	validable = false,
	validityError = undefined,
	...otherProps
}: TextFieldProps) => {
	const parentOnChange = otherProps.onChange;
	otherProps.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		parentOnChange?.(e);

		if (validable) e.target.className = e.target.value === "" ? "error-input-required" : "";
	}

	return (
		<>
			{inForm
				? (
					<div className="form-row">
						<input type="text" className={validityError ? "error-input-required" : ""} {...otherProps} />
					</div>
				)
				: <input type="text" className={validityError ? "error-input-required" : ""} {...otherProps} />
			}
		</>
	)
}

export const TextArea: React.FC<TextAreaProps> = ({
	inForm = false,
	validable = false,
	validityError = undefined,
	...otherProps
}: TextAreaProps) => {
	const parentOnChange = otherProps.onChange;
	otherProps.onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		parentOnChange?.(e);

		if (validable) e.target.className = e.target.value === "" ? "error-input-required" : "";
	}

	return (
		<>
			{inForm
				? (
					<div className="form-row">
						<textarea className={validityError ? "error-input-required" : ""} {...otherProps} />
					</div>
				)
				: <textarea className={validityError ? "error-input-required" : ""} {...otherProps} />
			}
		</>
	)
}

export default { TextField, TextArea }
