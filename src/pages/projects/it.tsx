import React from "react"

import ScopeContext from "../../context/scope"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Breadcrumbs from "../../components/Breadcrumbs"
import Page from "../../models/page"

const ProjectsITPage = () => {
	const currentPage: Page = {
		title: "IT",
		path: "it"
	};

	const parentPages: Page[] = [{
		title: "Проекты",
		path: "projects"
	}];

	return (
		<ScopeContext.Provider value={{ scope: parentPages[0].path }}>
			<Layout>
				<SEO title="IT-проекты" description="Проекты в сфере IT и высоких технологий" />
				<section id="content-holder" className="container">
					<Breadcrumbs page={currentPage} parentPages={parentPages} />
					<div id="content" className="content animate-fadein-css">
						<h1>Наши проекты в IT-сфере</h1>
					</div>
				</section>
			</Layout>
		</ScopeContext.Provider>
	)
}

export default ProjectsITPage
