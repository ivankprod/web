import React from "react";
import clsx from "clsx";

import "./FormRow.scss";

interface FormRowProps extends React.PropsWithChildren {
	className?: string;
}

const FormRow: React.FC<FormRowProps> = ({ className = "", children = undefined }) => {
	return <div className={clsx("form-row", className)}>{children}</div>;
};

export default FormRow;
