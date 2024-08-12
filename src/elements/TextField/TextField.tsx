import React from "react";
import clsx from "clsx";

import { BaseInputProps } from "models/element";

import "./TextField.scss";

type TextFieldProps = BaseInputProps &
	Omit<
		React.DetailedHTMLProps<
			React.InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>,
		keyof BaseInputProps
	>;

type TextAreaProps = BaseInputProps &
	Omit<
		React.DetailedHTMLProps<
			React.TextareaHTMLAttributes<HTMLTextAreaElement>,
			HTMLTextAreaElement
		>,
		keyof BaseInputProps
	>;

export const TextField: React.FC<TextFieldProps> = ({
	validable = false,
	validityError,
	...otherProps
}: TextFieldProps) => {
	const parentOnChange = otherProps.onChange;
	otherProps.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		parentOnChange?.(e);

		if (validable)
			e.target.className = clsx({
				"error-input-required": e.target.value === ""
			});
	};

	return (
		<input
			type="text"
			className={clsx({ "error-input-required": validityError })}
			{...otherProps}
		/>
	);
};

export const TextArea: React.FC<TextAreaProps> = ({
	validable = false,
	validityError,
	...otherProps
}: TextAreaProps) => {
	const parentOnChange = otherProps.onChange;
	otherProps.onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		parentOnChange?.(e);

		if (validable)
			e.target.className = clsx({
				"error-input-required": e.target.value === ""
			});
	};

	return (
		<textarea
			className={clsx({ "error-input-required": validityError })}
			{...otherProps}
		/>
	);
};
