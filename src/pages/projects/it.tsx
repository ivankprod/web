import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Breadcrumbs, { Page } from "../../components/breadcrumbs"

const ProjectsITPage = () => {
	const currentPage: Page = { title: "IT" };
	const parentPage: Page = {
		title: "Проекты",
		path: "projects"
	};

	return (
		<Layout scope="projects">
			<SEO title="IT-проекты" description="Проекты в сфере IT и высоких технологий" />
			<section id="content-holder" className="container">
				<Breadcrumbs page={currentPage} parentPages={[parentPage]} />
				<div id="content" className="content animate-fadein-css">
					Страница IT-проектов
				</div>
			</section>
		</Layout>
	)
}

export default ProjectsITPage
