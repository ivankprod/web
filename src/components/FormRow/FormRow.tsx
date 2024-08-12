import React from "react";
import clsx from "clsx";

import "./FormRow.scss";

interface FormRowProps extends React.PropsWithChildren {
	className?: string;
}

export const FormRow: React.FC<FormRowProps> = ({
	className = "",
	children
}) => {
	return <div className={clsx("form-row", className)}>{children}</div>;
};

export default FormRow;
