import React from "react";
import { HeadFC } from "gatsby";

import ScopeContext from "context/scope";

import Layout from "components/Layout";
import Slider from "components/Slider";
import SEO from "components/SEO";

const IndexPage = () => (
	<ScopeContext.Provider value={{ scope: "home" }}>
		<Layout>
			<section id="content-holder" className="container">
				<div id="content" className="content animate-fadein-css">
					<Slider />
				</div>
			</section>
		</Layout>
	</ScopeContext.Provider>
);

export default IndexPage;

export const Head: HeadFC = () => {
	return <SEO title="Главная" />;
};
