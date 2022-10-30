import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Breadcrumbs, { Page } from "../../components/breadcrumbs"

const ServicesPage = () => {
	const currentPage: Page = { title: "Сервисы" };

	return (
		<Layout scope="services">
			<SEO title={currentPage.title} description="Все сервисы" />
			<section id="content-holder" className="container">
				<Breadcrumbs page={currentPage} />
				<div id="content" className="content animate-fadein-css">
					<h1>Наши сервисы</h1>
				</div>
			</section>
		</Layout>
	)
}

export default ServicesPage
