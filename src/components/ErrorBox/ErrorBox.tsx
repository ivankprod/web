import React from "react"

import Button from "../../elements/Button"
import { ButtonSize } from "../../models/element"

import "./ErrorBox.css"

interface ErrorBoxProps {
	title: string,
	message: string
}

const ErrorBox: React.FC<ErrorBoxProps> = ({ title, message }) => {
	return (
		<div className="error-box">
			<div className="error-title">{title}</div>
			<div className="error-message">{message}</div>
			<Button to="/" size={ButtonSize.small}>На главную</Button>
		</div>
	)
}

export default ErrorBox
