import React from "react"

import ScopeContext from "../../context/ScopeContext"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Breadcrumbs, { Page } from "../../components/Breadcrumbs"

const ProjectsPage = () => {
	const currentPage: Page = { title: "Проекты" };

	return (
		<ScopeContext.Provider value={{ scope: "projects" }}>
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
