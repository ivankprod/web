import React from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import SEO from "components/SEO"
import Breadcrumbs from "components/Breadcrumbs"
import Page from "models/page"

interface LegalPageTemplateProps {
	data: {
		markdownRemark: {
			html: string,
			excerpt: string,
			frontmatter: {
				title: string,
				slug: string,
				date: string
			}
		}
	}
}

const LegalPageTemplate: React.FC<LegalPageTemplateProps> = ({ data: { markdownRemark } }) => {
	const { frontmatter, html } = markdownRemark;

	const currentPage: Page = {
		title: frontmatter.title,
		path: String(frontmatter.slug).slice(1, -1)
	};

	return (
		<Layout>
			<SEO title={currentPage.title} description={currentPage.title} />
			<section id="content-holder" className="container">
				<Breadcrumbs page={currentPage} />
				<div id="content" className="content animate-fadein-css">
					<h1>{currentPage.title}</h1>
					<div className="article" dangerouslySetInnerHTML={{ __html: html }}></div>
				</div>
			</section>
		</Layout>
	)
}

export default LegalPageTemplate

export const pageQuery = graphql`
	query ($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
				slug
				date(formatString: "MMMM DD, YYYY")
			}
		}
	}
`;
