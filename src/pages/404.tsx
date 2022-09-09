import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
	<Layout>
		<SEO title="Ошибка 404" robots="noindex, nofollow" />
		<h1>Ошибка 404. Документ не найден</h1>
	</Layout>
)

export default NotFoundPage
