import React, { useReducer, useRef } from "react";
import { Link } from "gatsby";

import { FormRow } from "components/FormRow";
import { Button, Checkbox, TextField, TextArea } from "elements";

import { encodeFormBody } from "scripts/utils";

import "./TemplateName.scss";

type TemplateNameState = {
	name: string;
	message: string;
	terms: boolean;
};

type TemplateNameAction = {
	type: string;
	payload: string | boolean;
};

const initialState: TemplateNameState = {
	name: "",
	message: "",
	terms: false
};

type TemplateNameValidityState = {
	nameError: boolean;
	messageError: boolean;
	termsError: boolean;
};

type TemplateNameValidityAction = {
	type: string;
	payload: TemplateNameState;
};

const initialValidityState: TemplateNameValidityState = {
	nameError: false,
	messageError: false,
	termsError: false
};

const formReducer = (
	state: TemplateNameState,
	action: TemplateNameAction
): TemplateNameState => {
	switch (action.type) {
		case "UPDATE_NAME":
			return {
				...state,
				name: action.payload as string
			};

		case "UPDATE_MESSAGE":
			return {
				...state,
				message: action.payload as string
			};

		case "UPDATE_TERMS":
			return {
				...state,
				terms: action.payload as boolean
			};

		case "UPDATE_ALL_FIELDS":
			return {
				...state,
				name: action.payload as string,
				message: action.payload as string
			};

		default:
			return state;
	}
};

const formValidityReducer = (
	state: TemplateNameValidityState,
	action: TemplateNameValidityAction
): TemplateNameValidityState => {
	switch (action.type) {
		case "VALIDATE_NAME":
			return {
				...state,
				...{ nameError: action.payload.name.length > 0 ? false : true }
			};

		case "VALIDATE_MESSAGE":
			return {
				...state,
				...{
					messageError:
						action.payload.message.length > 0 ? false : true
				}
			};

		case "VALIDATE_TERMS":
			return {
				...state,
				...{ termsError: action.payload.terms ? false : true }
			};

		case "VALIDATE_ALL":
			return {
				...state,
				...{
					nameError: action.payload.name.length > 0 ? false : true,
					messageError:
						action.payload.message.length > 0 ? false : true,
					termsError: action.payload.terms ? false : true
				}
			};

		default:
			return state;
	}
};

const TemplateName: React.FC = () => {
	const [formData, setFormData] = useReducer(formReducer, initialState);
	const [formValidityData, setFormValidityData] = useReducer(
		formValidityReducer,
		initialValidityState
	);

	const errorWrapper = useRef<HTMLDivElement>(null);

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		setFormValidityData({ type: "VALIDATE_ALL", payload: formData });

		if (
			formData.name === "" ||
			formData.message === "" ||
			formData.terms === false
		) {
			if (errorWrapper.current)
				errorWrapper.current.className = "postsubmit-text";
		} else {
			fetch("/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: encodeFormBody({
					"form-name": "template-name",
					...formData
				})
			})
				.then((resp) => {
					if (errorWrapper.current) {
						if (resp.ok) {
							setFormData({
								type: "UPDATE_ALL_FIELDS",
								payload: ""
							});

							errorWrapper.current.textContent =
								"Сообщение успешно отправлено!";
							errorWrapper.current.classList.add("success");
						} else {
							errorWrapper.current.textContent =
								"Ошибка: " + resp.statusText;
							errorWrapper.current.classList.add("error");
						}
					}
				})
				.catch((error) => {
					if (errorWrapper.current) {
						errorWrapper.current.textContent = "Ошибка: " + error;
						errorWrapper.current.classList.add("error");
					}
				});
		}

		event.preventDefault();
	};

	return (
		<div className="form-wrapper">
			<h2>Заголовок формы</h2>
			<form
				name="template-name"
				method="POST"
				onSubmit={onSubmitHandler}
				data-netlify="true"
				data-netlify-honeypot="bot-field"
			>
				<input name="bot-field" type="hidden" />
				<input name="form-name" type="hidden" value="template-name" />
				<FormRow>
					<TextField
						name="name"
						id="name"
						placeholder="Введите ваше имя"
						value={formData.name}
						validable={true}
						validityError={formValidityData.nameError}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setFormData({
								type: "UPDATE_NAME",
								payload: e.target.value
							});
						}}
						onBlur={() =>
							setFormValidityData({
								type: "VALIDATE_NAME",
								payload: formData
							})
						}
					/>
				</FormRow>
				<FormRow>
					<TextArea
						name="message"
						id="message"
						placeholder="Введите сообщение"
						value={formData.message}
						validable={true}
						validityError={formValidityData.messageError}
						onChange={(
							e: React.ChangeEvent<HTMLTextAreaElement>
						) => {
							setFormData({
								type: "UPDATE_MESSAGE",
								payload: e.target.value
							});
						}}
						onBlur={() =>
							setFormValidityData({
								type: "VALIDATE_MESSAGE",
								payload: formData
							})
						}
					/>
				</FormRow>
				<FormRow>
					<Checkbox
						id="terms"
						validable={true}
						validityError={formValidityData.termsError}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setFormData({
								type: "UPDATE_TERMS",
								payload: e.target.checked
							});
						}}
						onBlur={() =>
							setFormValidityData({
								type: "VALIDATE_TERMS",
								payload: formData
							})
						}
					>
						<span>
							Я выражаю согласие на обработку моих персональных
							данных, указанных в заявке, ознакомился и
							принимаю&nbsp;
						</span>
						<Link
							to="/legal/privacy-policy/"
							className="link-in-text"
						>
							политику конфиденциальности
						</Link>
					</Checkbox>
				</FormRow>
				<FormRow className="submit">
					<div ref={errorWrapper} className="postsubmit-text"></div>
					<Button as="input" type="submit" value="Отправить"></Button>
				</FormRow>
			</form>
		</div>
	);
};

export default TemplateName;
