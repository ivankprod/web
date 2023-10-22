import React from "react"
import { HeadFC } from "gatsby"

import ScopeContext from "context/scope"

import Layout from "components/Layout"
import SEO from "components/SEO"
import Breadcrumbs from "components/Breadcrumbs"
import Page from "models/page"


const ServicesPage = () => {
	const currentPage: Page = {
		title: "Услуги",
		path: "services"
	};

	return (
		<ScopeContext.Provider value={{ scope: currentPage.path }}>
			<Layout>
				<section id="content-holder" className="container">
					<Breadcrumbs page={currentPage} />
					<div id="content" className="content animate-fadein-css">
						<h1>Наши услуги</h1>
					</div>
				</section>
			</Layout>
		</ScopeContext.Provider>
	)
}

export default ServicesPage

export const Head: HeadFC = () => {
	return (
		<SEO title="Услуги" description="Услуги компании" path="services" />
	)
}
