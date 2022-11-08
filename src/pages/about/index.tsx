import React from "react"

import ScopeContext from "../../context/ScopeContext"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Breadcrumbs, { Page } from "../../components/Breadcrumbs"

const AboutPage = () => {
	const currentPage: Page = { title: "О нас" };

	return (
		<ScopeContext.Provider value={{ scope: "about" }}>
			<Layout>
				<SEO title={currentPage.title} description="Информация о нашей компании" />
				<section id="content-holder" className="container">
					<Breadcrumbs page={currentPage} />
					<div id="content" className="content animate-fadein-css">
						<h1>О нас</h1>
					</div>
				</section>
			</Layout>
		</ScopeContext.Provider>
	)
}

export default AboutPage
