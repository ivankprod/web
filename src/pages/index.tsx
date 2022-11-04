import React from "react"

import ScopeContext from "../context/scopeContext"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider"

const IndexPage = () => (
	<ScopeContext.Provider value={{ scope: "home" }}>
		<Layout>
			<SEO title="Главная" />
			<section id="content-holder" className="container">
				<div id="content" className="content animate-fadein-css">
					<Slider />
				</div>
			</section>
		</Layout>
	</ScopeContext.Provider>
)

export default IndexPage
