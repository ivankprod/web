import React from "react"

import ScopeContext from "../../context/scope"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Breadcrumbs from "../../components/Breadcrumbs"
import Page from "../../models/page"

const ProjectsPage = () => {
	const currentPage: Page = {
		title: "Проекты",
		path: "projects"
	};

	return (
		<ScopeContext.Provider value={{ scope: currentPage.path }}>
			<Layout>
				<SEO title={currentPage.title} description="Все проекты" />
				<section id="content-holder" className="container">
					<Breadcrumbs page={currentPage} />
					<div id="content" className="content animate-fadein-css">
						<h1>Наши проекты</h1>
					</div>
				</section>
			</Layout>
		</ScopeContext.Provider>
	)
}

export default ProjectsPage
