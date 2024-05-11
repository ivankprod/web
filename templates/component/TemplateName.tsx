import React, { ReactNode } from "react";

import "./TemplateName.css";

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
