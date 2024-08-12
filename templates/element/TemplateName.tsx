import React from "react";

import { BaseInputProps } from "models/element";

import "./TemplateName.scss";

interface TemplateNameOwnProps extends BaseInputProps {}

type TemplateNameProps = TemplateNameOwnProps &
	Omit<
		React.DetailedHTMLProps<
			React.InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>,
		keyof TemplateNameOwnProps
	>;

export const TemplateName: React.FC<TemplateNameProps> = ({
	...otherProps
}: TemplateNameProps) => {
	/* const parentOnChange = otherProps.onChange;
	otherProps.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		parentOnChange?.(e);
	} */

	return (
		<>
			<input type="text" {...otherProps} />
		</>
	);
};

export default TemplateName;
