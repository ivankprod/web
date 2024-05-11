import React, { ReactNode } from "react";

import { BaseInputProps } from "models/element";

import "./TemplateName.css";

interface TemplateNameOwnProps extends BaseInputProps {
	children?: ReactNode;
}

type TemplateNameProps = TemplateNameOwnProps &
	Omit<
		React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		keyof TemplateNameOwnProps
	>;

const TemplateName: React.FC<TemplateNameProps> = ({
	children = undefined,
	...otherProps
}: TemplateNameProps) => {
	/* const parentOnChange = otherProps.onChange;
	otherProps.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		parentOnChange?.(e);
	} */

	return (
		<>
			<input type="text" {...otherProps} />
			{children}
		</>
	);
};

export default TemplateName;
