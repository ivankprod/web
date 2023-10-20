import React from "react"

import Layout from "components/Layout"
import SEO from "components/SEO"
import ErrorBox from "components/ErrorBox"

const NotFoundPage = () => (
	<Layout>
		<SEO title="Ошибка 404" robots="noindex, nofollow" />
		<section id="content-holder" className="container">
			<div id="content" className="content animate-fadein-css">
				<ErrorBox title="404 Не найдено" message="Запрашиваемая страница не найдена либо ещё не создана"></ErrorBox>
			</div>
		</section>
	</Layout>
)

export default NotFoundPage
