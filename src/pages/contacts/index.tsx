import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Breadcrumbs, { Page } from "../../components/breadcrumbs"

const ContactsPage = () => {
	const currentPage: Page = { title: "Контакты" };

	return (
		<Layout scope="contacts">
			<SEO title={currentPage.title} description="Наши контакты" />
			<section id="content-holder" className="container">
				<Breadcrumbs page={currentPage} />
				<div id="content" className="content animate-fadein-css">
					<h1>Наши контакты</h1>
				</div>
			</section>
		</Layout>
	)
}

export default ContactsPage
