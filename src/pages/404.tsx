import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button, { ButtonSize } from "../components/controls/button"

import "../styles/components/errorBox.css"

const NotFoundPage = () => (
	<Layout>
		<SEO title="Ошибка 404" robots="noindex, nofollow" />
		<section id="content-holder" className="container">
			<div id="content" className="content animate-fadein-css">
				<div className="error-box">
					<div className="error-title">404 Не найдено</div>
					<div className="error-message">Запрашиваемая страница не найдена либо ещё не создана</div>
					<Button to="/" size={ButtonSize.small}>На главную</Button>
				</div>
			</div>
		</section>
	</Layout>
)

export default NotFoundPage
