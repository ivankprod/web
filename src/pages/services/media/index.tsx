import React from "react"

import ScopeContext from "../../../context/scope"

import Layout from "../../../components/Layout"
import SEO from "../../../components/SEO"
import Breadcrumbs from "../../../components/Breadcrumbs"
import Page from "../../../models/page"

const ServicesMediaPage = () => {
	const currentPage: Page = {
		title: "Медиа",
		path: "media"
	};

	const parentPages: Page[] = [{
		title: "Услуги",
		path: "services"
	}];

	return (
		<ScopeContext.Provider value={{ scope: parentPages[0].path }}>
			<Layout>
				<SEO title="Медиа-услуги" description="Услуги в сфере медиа" />
				<section id="content-holder" className="container">
					<Breadcrumbs page={currentPage} parentPages={parentPages} />
					<div id="content" className="content animate-fadein-css">
						<h2>Наши услуги в сфере медиа</h2>
					</div>
				</section>
			</Layout>
		</ScopeContext.Provider>
	)
}

export default ServicesMediaPage
