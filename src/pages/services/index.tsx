import React from "react"

import ScopeContext from "../../context/ScopeContext"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Breadcrumbs, { Page } from "../../components/Breadcrumbs"

const ServicesPage = () => {
	const currentPage: Page = { title: "Услуги" };

	return (
		<ScopeContext.Provider value={{ scope: "services" }}>
			<Layout>
				<SEO title={currentPage.title} description="Услуги компании" />
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
