import React, { useRef } from "react"
import { Link } from "gatsby"

const ContactsForm: React.FC = () => {
	const inputName = useRef<HTMLInputElement>(null)
	const inputEmail = useRef<HTMLInputElement>(null)
	const inputMessage = useRef<HTMLTextAreaElement>(null)
	const inputAgree = useRef<HTMLInputElement>(null)

	interface FormDataType { name: string, email: string, message: string }
	const formData: FormDataType = { name: "", email: "", message: "" }

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		formData.name = inputName?.current?.value || "";
		formData.email = inputEmail?.current?.value || "";
		formData.message = inputMessage?.current?.value || "";

		if (inputAgree?.current?.checked) console.log(formData);
	}

	return (
		<div className="contacts-form-wrapper">
			<h2>Остались вопросы?</h2>
			<form onSubmit={onSubmitHandler}>
				<div className="form-row">
					<input id="name" ref={inputName} type="text" placeholder="Введите ваше имя" />
				</div>
				<div className="form-row">
					<input id="email" ref={inputEmail} type="text" placeholder="Введите ваш e-mail" />
				</div>
				<div className="form-row">
					<textarea id="message" ref={inputMessage} placeholder="Введите сообщение" />
				</div>
				<div className="form-row">
					<input id="agree" ref={inputAgree} type="checkbox" />
					<label htmlFor="agree">
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
