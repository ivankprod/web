import React from "react"

import "./TemplateName.css"

interface TemplateNameOwnProps {
	/* children?: ReactNode */
}

type TemplateNameProps = TemplateNameOwnProps
	& Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, keyof TemplateNameOwnProps>

const TemplateName: React.FC<TemplateNameProps> = ({
	/* children = undefined, */
	...otherProps
}: TemplateNameProps) => {
	/* const parentOnChange = otherProps.onChange;
	otherProps.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		parentOnChange?.(e);
	} */

	return (
		<input type="text" {...otherProps} />
	)
}

export default TemplateName
