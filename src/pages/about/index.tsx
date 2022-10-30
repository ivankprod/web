import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Breadcrumbs, { Page } from "../../components/breadcrumbs"

const AboutPage = () => {
	const currentPage: Page = { title: "О нас" };

	return (
		<Layout scope="about">
			<SEO title={currentPage.title} description="Информация о нашей компании" />
			<section id="content-holder" className="container">
				<Breadcrumbs page={currentPage} />
				<div id="content" className="content animate-fadein-css">
					<h1>О нас</h1>
				</div>
			</section>
		</Layout>
	)
}

export default AboutPage
