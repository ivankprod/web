import React from "react"

import ScopeContext from "../../context/scope"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Breadcrumbs from "../../components/Breadcrumbs"
import Page from "../../models/page"

const AboutPage = () => {
	const currentPage: Page = {
		title: "О нас",
		path: "about"
	};

	return (
		<ScopeContext.Provider value={{ scope: currentPage.path }}>
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
