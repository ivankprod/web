import React from "react";

import Button from "elements/Button";
import { ButtonSize } from "models/element";

import "./ErrorBox.scss";

interface ErrorBoxProps {
	title: string;
	message: string;
}

export const ErrorBox: React.FC<ErrorBoxProps> = ({ title, message }) => {
	return (
		<div className="error-box">
			<div className="error-box__title">{title}</div>
			<div className="error-box__message">{message}</div>
			<Button
				className="error-box__button"
				to="/"
				size={ButtonSize.small}
			>
				На главную
			</Button>
		</div>
	);
};

export default ErrorBox;
