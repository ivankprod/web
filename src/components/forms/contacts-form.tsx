import React, { useReducer } from "react"
import { createUseStyles } from "react-jss"
import { Link } from "gatsby"

import Button from "../controls/button"
import { InputText, InputTextArea } from "../controls/input-text"

import "../../styles/components/form.css"

const useStyles = createUseStyles({
	wrapper: {
		width: "50%"
	},

	h2: {
		marginBottom: 18
	}
});

type ContactsFormState = {
	name: string,
	email: string,
	message: string,
	terms: boolean
}

type ContactsFormAction = {
	type: string,
	payloadString: string,
	payloadBoolean: boolean
}

const initialState: ContactsFormState = {
	name: "",
	email: "",
	message: "",
	terms: false
}

type ContactsFormValidityState = {
	nameError: boolean,
	emailError: boolean,
	messageError: boolean,
	termsError: boolean
}

type ContactsFormValidityAction = {
	type: string,
	payLoad: ContactsFormState
}

const initialValidityState: ContactsFormValidityState = {
	nameError: false,
	emailError: false,
	messageError: false,
	termsError: false
}

const formReducer = (state: ContactsFormState, action: ContactsFormAction): ContactsFormState => {
	switch (action.type) {
		case "UPDATE_NAME": return {
			...state, name: action.payloadString,
		}

		case "UPDATE_EMAIL": return {
			...state, email: action.payloadString,
		}

		case "UPDATE_MESSAGE": return {
			...state, message: action.payloadString,
		}

		case "UPDATE_TERMS": return {
			...state, terms: action.payloadBoolean,
		}

		case "UPDATE_FIELDS": return {
			...state, name: "", email: "", message: ""
		}

		default:
			return state
	}
}

const formValidityReducer = (state: ContactsFormValidityState, action: ContactsFormValidityAction): ContactsFormValidityState => {
	switch (action.type) {
		case "VALIDATE_NAME": return {
			...state,
			...({ nameError: action.payLoad.name.length > 0 ? false : true })
		}

		case "VALIDATE_EMAIL": return {
			...state,
			...({ emailError: action.payLoad.email.length > 0 ? false : true })
		}

		case "VALIDATE_MESSAGE": return {
			...state,
			...({ messageError: action.payLoad.message.length > 0 ? false : true })
		}

		case "VALIDATE_TERMS": return {
			...state,
			...({ termsError: action.payLoad.terms ? false : true })
		}

		case "VALIDATE_ALL": return {
			...state,
			...({
				nameError: action.payLoad.name.length > 0 ? false : true,
				emailError: action.payLoad.email.length > 0 ? false : true,
				messageError: action.payLoad.message.length > 0 ? false : true,
				termsError: action.payLoad.terms ? false : true
			})
		}

		default:
			return state
	}
}

const encode = (data: any) => {
	return Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
}

const ContactsForm: React.FC = () => {
	const [formData, setFormData] = useReducer(formReducer, initialState);
	const [formValidityData, setFormValidityData] = useReducer(formValidityReducer, initialValidityState);

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		setFormValidityData({ type: "VALIDATE_ALL", payLoad: formData });

		const errorWrapper = document.querySelector("form .postsubmit-text");

		if (formData.name === "" || formData.email === "" || formData.message === "" || formData.terms === false) {
			if (errorWrapper) {
				errorWrapper.className = "postsubmit-text";
			}
		} else {
			fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: encode({ "form-name": "contacts-form", ...formData })
			}).then((resp) => {
				if (errorWrapper) {
					if (resp.ok) {
						setFormData({ type: "UPDATE_FIELDS", payloadString: "", payloadBoolean: false });

						errorWrapper.textContent = "Сообщение успешно отправлено!";
						errorWrapper.classList.add("success");
					} else {
						errorWrapper.textContent = "Ошибка: " + resp.statusText;
						errorWrapper.classList.add("error");
					}
				}
			}).catch((error) => {
				if (errorWrapper) {
					errorWrapper.textContent = "Ошибка: " + error;
					errorWrapper.classList.add("error");
				}
			});
		}

		event.preventDefault();
	}

	const ContactsFormStyles = useStyles();

	return (
		<div className={ContactsFormStyles.wrapper}>
			<h2 className={ContactsFormStyles.h2}>Остались вопросы?</h2>
			<form name="contacts-form" method="POST" onSubmit={onSubmitHandler} data-netlify="true" data-netlify-honeypot="bot-field">
				<input name="bot-field" type="hidden" />
				<input name="form-name" type="hidden" value="contacts-form" />
				<InputText inForm={true} name="name" id="name" placeholder="Введите ваше имя"
					value={formData.name}
					validable={true}
					validityError={formValidityData.nameError}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setFormData({ type: "UPDATE_NAME", payloadString: e.target.value, payloadBoolean: false });
					}}
					onBlur={() => setFormValidityData({ type: "VALIDATE_NAME", payLoad: formData })}
				/>
				<InputText inForm={true} name="email" id="email" placeholder="Введите ваш e-mail"
					value={formData.email}
					validable={true}
					validityError={formValidityData.emailError}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setFormData({ type: "UPDATE_EMAIL", payloadString: e.target.value, payloadBoolean: false });
					}}
					onBlur={() => setFormValidityData({ type: "VALIDATE_EMAIL", payLoad: formData })}
				/>
				<InputTextArea inForm={true} name="message" id="message" placeholder="Введите сообщение"
					value={formData.message}
					validable={true}
					validityError={formValidityData.messageError}
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
						setFormData({ type: "UPDATE_MESSAGE", payloadString: e.target.value, payloadBoolean: false });
					}}
					onBlur={() => setFormValidityData({ type: "VALIDATE_MESSAGE", payLoad: formData })}
				/>
				<div className="form-row">
					<input id="terms" type="checkbox"
						className={formValidityData.termsError ? "error-input-required" : ""}
						onChange={(e) => {
							setFormData({ type: "UPDATE_TERMS", payloadString: "", payloadBoolean: e.target.checked });

							e.target.className = !e.target.checked ? "error-input-required" : "";
						}}
						onBlur={() => setFormValidityData({ type: "VALIDATE_TERMS", payLoad: formData })}
					/>
					<label htmlFor="terms">
						Я выражаю согласие на обработку моих персональных данных, указанных в заявке, ознакомился и принимаю&nbsp;
						<Link to="/legal/privacy-policy/" className="link-in-text">политику конфиденциальности</Link>
					</label>
				</div>
				<div className="form-row submit">
					<div className="postsubmit-text"></div>
					<Button as="input" type="submit" value="Отправить"></Button>
				</div>
			</form>
		</div>
	)
}

export default ContactsForm
