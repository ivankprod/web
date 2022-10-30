import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Breadcrumbs, { Page } from "../../components/breadcrumbs"

const BlogPage = () => {
	const currentPage: Page = { title: "Блог" };

	return (
		<Layout scope="blog">
			<SEO title={currentPage.title} description="Блог нашей компании" />
			<section id="content-holder" className="container">
				<Breadcrumbs page={currentPage} />
				<div id="content" className="content animate-fadein-css">
					<h1>Блог</h1>
				</div>
			</section>
		</Layout>
	)
}

export default BlogPage
