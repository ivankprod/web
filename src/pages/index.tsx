import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider"

const IndexPage = () => (
	<Layout scope="home">
		<SEO title="Главная" />
		<section id="content-holder" className="container">
			<div id="content" className="content animate-fadein-css">
				<Slider/>
			</div>
		</section>
	</Layout>
)

export default IndexPage
