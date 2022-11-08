import React from "react"

import ScopeContext from "../../context/scope"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import { Breadcrumbs, Page } from "../../components/Breadcrumbs"

const ProjectsITPage = () => {
	const currentPage: Page = { title: "IT" };
	const parentPage: Page = {
		title: "Проекты",
		path: "projects"
	};

	return (
		<ScopeContext.Provider value={{ scope: "projects" }}>
			<Layout>
				<SEO title="IT-проекты" description="Проекты в сфере IT и высоких технологий" />
				<section id="content-holder" className="container">
					<Breadcrumbs page={currentPage} parentPages={[parentPage]} />
					<div id="content" className="content animate-fadein-css">
						<h1>Наши проекты в IT-сфере</h1>
					</div>
				</section>
			</Layout>
		</ScopeContext.Provider>
	)
}

export default ProjectsITPage
