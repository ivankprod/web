import React from "react"
import { HeadFC } from "gatsby"

import Layout from "components/Layout"
import SEO from "components/SEO"
import ErrorBox from "components/ErrorBox"

const NotFoundPage = () => (
	<Layout>
		<section id="content-holder" className="container">
			<div id="content" className="content animate-fadein-css">
				<ErrorBox title="404 Не найдено" message="Запрашиваемая страница не найдена либо ещё не создана"></ErrorBox>
			</div>
		</section>
	</Layout>
)

export default NotFoundPage

export const Head: HeadFC = () => {
	return (
		<SEO title="Ошибка 404" robots="noindex, nofollow" />
	)
}
