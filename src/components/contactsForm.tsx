import React, { useReducer, useRef } from "react"
import { Link } from "gatsby"

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
		setFormValidityData({ type: "VALIDATE_ALL", payLoad: formData })

		if (formValidityData.nameError || formValidityData.emailError || formValidityData.messageError || formValidityData.termsError) {
			alert("Error!");
			return;
		}

		/*const newFormData = new FormData(event.target as HTMLFormElement);
		newFormData.append("name", formData.name);
		newFormData.append("email", formData.email);
		newFormData.append("message", formData.message);*/

		// TODO: fetch form data
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contacts-form", ...formData })
		}).then(() => console.log(encode({ "form-name": "contacts-form", ...formData }))).catch((error) => alert(error));

		event.preventDefault();
	}

	return (
		<div className="contacts-form-wrapper">
			<h2>Остались вопросы?</h2>
			<form name="contacts-form" method="POST" onSubmit={onSubmitHandler} data-netlify="true" netlify-honeypot="bot-field">
				<input name="bot-field" type="hidden" />
				<input name="form-name" type="hidden" value="contacts-form" />
				<div className="form-row">
					<input id="name" type="text" placeholder="Введите ваше имя"
						className={formValidityData.nameError ? "error_input_required" : ""}
						onChange={(e) => {
							setFormData({ type: "UPDATE_NAME", payloadString: e.target.value, payloadBoolean: false });

							e.target.className = e.target.value === "" ? "error_input_required" : "";
						}}
						onBlur={() => setFormValidityData({ type: "VALIDATE_NAME", payLoad: formData })}
					/>
				</div>
				<div className="form-row">
					<input id="email" type="text" placeholder="Введите ваш e-mail"
						className={formValidityData.emailError ? "error_input_required" : ""}
						onChange={(e) => {
							setFormData({ type: "UPDATE_EMAIL", payloadString: e.target.value, payloadBoolean: false });

							e.target.className = e.target.value === "" ? "error_input_required" : "";
						}}
						onBlur={() => setFormValidityData({ type: "VALIDATE_EMAIL", payLoad: formData })}
					/>
				</div>
				<div className="form-row">
					<textarea id="message" placeholder="Введите сообщение"
						className={formValidityData.messageError ? "error_input_required" : ""}
						onChange={(e) => {
							setFormData({ type: "UPDATE_MESSAGE", payloadString: e.target.value, payloadBoolean: false });

							e.target.className = e.target.value === "" ? "error_input_required" : "";
						}}
						onBlur={() => setFormValidityData({ type: "VALIDATE_MESSAGE", payLoad: formData })}
					/>
				</div>
				<div className="form-row">
					<input id="terms" type="checkbox"
						className={formValidityData.termsError ? "error_input_required" : ""}
						onChange={(e) => {
							setFormData({ type: "UPDATE_TERMS", payloadString: "", payloadBoolean: e.target.checked });

							e.target.className = !e.target.checked ? "error_input_required" : "";
						}}
						onBlur={() => setFormValidityData({ type: "VALIDATE_TERMS", payLoad: formData })}
					/>
					<label htmlFor="terms">
						Я выражаю согласие на обработку моих персональных данных, указанных в заявке, ознакомился и принимаю&nbsp;
						<Link to="/legal/privacy-policy/" className="link-in-text">политику конфиденциальности</Link>
					</label>
				</div>
				<div className="form-row submit">
					<input type="submit" value="Отправить" className="abutton rounded-all" />
				</div>
			</form>
		</div>
	)
}

export default ContactsForm
