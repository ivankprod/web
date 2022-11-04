import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/components/errorBox.css"

const NotFoundPage = () => (
	<Layout>
		<SEO title="Ошибка 404" robots="noindex, nofollow" />
		<section id="content-holder" className="container">
			<div id="content" className="content animate-fadein-css">
				<div className="error-box">
					<div className="error-title">404 Не найдено</div>
					<div className="error-message">Запрашиваемая страница не найдена либо ещё не создана</div>
					<Link to="/" className="abutton small rounded-all">На главную</Link>
				</div>
			</div>
		</section>
	</Layout>
)

export default NotFoundPage
