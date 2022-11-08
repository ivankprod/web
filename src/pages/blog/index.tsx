import React from "react"

import ScopeContext from "../../context/scope"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import { Breadcrumbs, Page } from "../../components/Breadcrumbs"

const BlogPage = () => {
	const currentPage: Page = { title: "Блог" };

	return (
		<ScopeContext.Provider value={{ scope: "blog" }}>
			<Layout>
				<SEO title={currentPage.title} description="Блог нашей компании" />
				<section id="content-holder" className="container">
					<Breadcrumbs page={currentPage} />
					<div id="content" className="content animate-fadein-css">
						<h1>Блог</h1>
					</div>
				</section>
			</Layout>
		</ScopeContext.Provider>
	)
}

export default BlogPage
