import React, { ReactNode } from "react";

import "./TemplateName.scss";

interface TemplateNameProps {
	children?: ReactNode;
}

const TemplateName: React.FC<TemplateNameProps> = ({ children = undefined }) => {
	return (
		<div>
			{children}
		</div>
	);
};

export default TemplateName;
