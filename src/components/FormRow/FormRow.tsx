import React, { ReactNode } from "react"
import clsx from "clsx"

import "./FormRow.css"

interface FormRowProps {
	className?: string,
	children?: ReactNode
}

const FormRow: React.FC<FormRowProps> = ({className = "", children = undefined }) => {
	return (
		<div className={clsx("form-row", className)}>
			{children}
		</div>
	)
}

export default FormRow
