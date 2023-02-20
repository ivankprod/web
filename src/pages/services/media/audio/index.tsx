import React from "react"

import ScopeContext from "../../../../context/scope"

import Layout from "../../../../components/Layout"
import SEO from "../../../../components/SEO"
import Breadcrumbs from "../../../../components/Breadcrumbs"
import Page from "../../../../models/page"

const ServicesMediaAudioPage = () => {
	const currentPage: Page = {
		title: "Аудио",
		path: "audio"
	};

	const parentPages: Page[] = [{
		title: "Услуги",
		path: "services"
	}, {
		title: "Медиа",
		path: "services/media"
	}];

	return (
		<ScopeContext.Provider value={{ scope: parentPages[0].path }}>
			<Layout>
				<SEO title="Аудио-услуги" description="Услуги в сфере аудио-производства" />
				<section id="content-holder" className="container">
					<Breadcrumbs page={currentPage} parentPages={parentPages} />
					<div id="content" className="content animate-fadein-css">
						<h2>Наши услуги в сфере аудио-производства</h2>
					</div>
				</section>
			</Layout>
		</ScopeContext.Provider>
	)
}

export default ServicesMediaAudioPage