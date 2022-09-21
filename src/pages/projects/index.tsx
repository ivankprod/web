import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Breadcrumbs, { Page } from "../../components/breadcrumbs"

const ProjectsPage = () => {
	const currentPage: Page = { title: "Проекты" };

	return (
		<Layout scope="projects">
			<SEO title={currentPage.title} description="Все проекты" />
			<section id="content-holder" className="container">
				<Breadcrumbs page={currentPage} />
				<div id="content" className="content animate-fadein-css">
					Страница проектов
				</div>
			</section>
		</Layout>
	)
}

export default ProjectsPage
