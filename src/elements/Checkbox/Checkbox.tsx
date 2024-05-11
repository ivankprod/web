import React from "react";
import clsx from "clsx";

import { BaseInputProps } from "models/element";

import "./Checkbox.scss";

interface CheckboxOwnProps extends React.PropsWithChildren<BaseInputProps> {}

type CheckboxProps = CheckboxOwnProps &
	Omit<
		React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		keyof CheckboxOwnProps
	>;

const Checkbox: React.FC<CheckboxProps> = ({
	validable = false,
	validityError = undefined,
	children = undefined,
	...otherProps
}: CheckboxProps) => {
	const parentOnChange = otherProps.onChange;
	otherProps.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		parentOnChange?.(e);

		if (validable) e.target.className = clsx({ "error-input-required": !e.target.checked });
	};

	return (
		<>
			<input
				type="checkbox"
				className={clsx({ "error-input-required": validityError })}
				{...otherProps}
			/>
			<label htmlFor={otherProps.id} style={{ cursor: "pointer" }}>
				{children}
			</label>
		</>
	);
};

export default Checkbox;
