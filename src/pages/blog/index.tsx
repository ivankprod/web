import React from "react";
import { HeadFC } from "gatsby";

import ScopeContext from "context/scope";

import Layout from "components/Layout";
import { Breadcrumbs, SEO } from "components";

import { Page } from "models/page";

const BlogPage = () => {
	const currentPage: Page = {
		title: "Блог",
		path: "blog"
	};

	return (
		<ScopeContext.Provider value={{ scope: currentPage.path }}>
			<Layout>
				<section id="content-holder" className="container">
					<Breadcrumbs page={currentPage} />
					<div id="content" className="content animate-fadein-css">
						<h1>Блог</h1>
					</div>
				</section>
			</Layout>
		</ScopeContext.Provider>
	);
};

export default BlogPage;

export const Head: HeadFC = () => {
	return <SEO title="Блог" description="Блог нашей компании" path="blog" />;
};
