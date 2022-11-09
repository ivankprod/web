import React from "react"

import ScopeContext from "../../context/scope"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import { Breadcrumbs, Page } from "../../components/Breadcrumbs"

//import "./templateName.css"

const TemplateNamePage = () => {
	const currentPage: Page = { title: "" };

	return (
		<ScopeContext.Provider value={{ scope: "template-name" }}>
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
