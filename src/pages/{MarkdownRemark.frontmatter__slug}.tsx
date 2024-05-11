import React from "react";
import { HeadFC, HeadProps, PageProps, graphql } from "gatsby";

import Layout from "components/Layout";
import Breadcrumbs from "components/Breadcrumbs";
import SEO from "components/SEO";

import Page from "models/page";

interface LegalPageTemplateProps {
	markdownRemark: {
		html: string;
		excerpt: string;
		frontmatter: {
			title: string;
			slug: string;
			date: string;
		};
	};
}

const LegalPageTemplate: React.FC<PageProps<LegalPageTemplateProps>> = ({
	data: { markdownRemark }
}: PageProps<LegalPageTemplateProps>) => {
	const { frontmatter, html } = markdownRemark;

	const currentPage: Page = {
		title: frontmatter.title,
		path: frontmatter.slug.slice(1, -1)
	};

	return (
		<Layout>
			<section id="content-holder" className="container">
				<Breadcrumbs page={currentPage} />
				<div id="content" className="content animate-fadein-css">
					<h1>{currentPage.title}</h1>
					<div className="article" dangerouslySetInnerHTML={{ __html: html }}></div>
				</div>
			</section>
		</Layout>
	);
};

export default LegalPageTemplate;

export const Head: HeadFC<LegalPageTemplateProps> = ({
	data: { markdownRemark }
}: HeadProps<LegalPageTemplateProps>) => {
	return (
		<SEO
			title={markdownRemark.frontmatter.title}
			description={markdownRemark.frontmatter.title}
			path={markdownRemark.frontmatter.slug.slice(1, -1)}
			robots="noindex, nofollow"
		/>
	);
};

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
