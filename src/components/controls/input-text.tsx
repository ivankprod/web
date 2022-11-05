import React from "react";

import BaseInputProps from "../../models/input-controls";

import "../../styles/components/controls/input-text.css"

type InputTextProps = BaseInputProps
	& Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, keyof BaseInputProps>
type InputTextAreaProps = BaseInputProps
	& Omit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, keyof BaseInputProps>

export const InputText: React.FC<InputTextProps> = ({
	inForm = false,
	validable = false,
	validityError = undefined,
	...otherProps
}: InputTextProps) => {
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

export const InputTextArea: React.FC<InputTextAreaProps> = ({
	inForm = false,
	validable = false,
	validityError = undefined,
	...otherProps
}: InputTextAreaProps) => {
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

export default { InputText, InputTextArea }
