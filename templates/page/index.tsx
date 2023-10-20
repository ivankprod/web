import React from "react"

import ScopeContext from "context/scope"

import Layout from "components/Layout"
import SEO from "components/SEO"
import Breadcrumbs from "components/Breadcrumbs"
import Page from "models/page"

//import "./templateName.css"

const TemplateNamePage = () => {
	const currentPage: Page = {
		title: "",
		path: "template-name"
	};

	return (
		<ScopeContext.Provider value={{ scope: currentPage.path }}>
			<Layout>
				<SEO title={currentPage.title} description="" />
				<section id="content-holder" className="container">
					<Breadcrumbs page={currentPage} />
					<div id="content" className="content animate-fadein-css">
						<h1></h1>
					</div>
				</section>
			</Layout>
		</ScopeContext.Provider>
	)
}

export default TemplateNamePage
