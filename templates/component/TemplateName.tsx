import React from "react";

import "./TemplateName.scss";

interface TemplateNameProps extends React.PropsWithChildren {}

export const TemplateName: React.FC<TemplateNameProps> = ({ children }) => {
	return <div>{children}</div>;
};

export default TemplateName;
