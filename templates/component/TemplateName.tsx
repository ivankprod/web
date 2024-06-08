import React from "react";

import "./TemplateName.scss";

interface TemplateNameProps extends React.PropsWithChildren {}

const TemplateName: React.FC<TemplateNameProps> = ({ children = undefined }) => {
	return (
		<div>
			{children}
		</div>
	);
};

export default TemplateName;
