import React from "react";
import { HeadFC } from "gatsby";

import ScopeContext from "context/scope";

import Layout from "components/Layout";
import Breadcrumbs from "components/Breadcrumbs";
import SEO from "components/SEO";

import Page from "models/page";

const ServicesMediaPage = () => {
	const currentPage: Page = {
		title: "Медиа",
		path: "media"
	};

	const parentPages: Page[] = [
		{
			title: "Услуги",
			path: "services"
		}
	];

	return (
		<ScopeContext.Provider value={{ scope: parentPages[0].path }}>
			<Layout>
				<section id="content-holder" className="container">
					<Breadcrumbs page={currentPage} parentPages={parentPages} />
					<div id="content" className="content animate-fadein-css">
						<h2>Наши услуги в сфере медиа</h2>
					</div>
				</section>
			</Layout>
		</ScopeContext.Provider>
	);
};

export default ServicesMediaPage;

export const Head: HeadFC = () => {
	return <SEO title="Услуги: медиа" description="Услуги в сфере медиа" path="services/media" />;
};
