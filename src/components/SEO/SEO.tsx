import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface SeoProps {
	title: string
	description?: string
	lang?: string
	meta?: any[]
	path?: string
	robots?: string
}

const SEO: React.FC<SeoProps> = ({ title, description = "", lang = "ru", meta = [], path = "", robots = "index, follow" }) => {
	const { site } = useStaticQuery(
		graphql`query {
			site {
				siteMetadata {
					title
					description
					author
					siteUrl
				}
			}
		}`
	);

	const metaDescription = description || site.siteMetadata.description;
	const linkCanonical = `${site.siteMetadata.siteUrl}/${path}`;

	return (
		<Helmet
			htmlAttributes = {{ lang }}
			title = { title }
			titleTemplate = { `%s | ${site.siteMetadata.title}` }
			link = {[
				{
					rel: "canonical",
					href: linkCanonical,
				},
			]}
			meta = {[
				{
					name: "robots",
					content: robots,
				},
				{
					name: "description",
					content: metaDescription,
				},
				{
					name: "keywords",
					content: "ivankprod, ivank, colldier, production, video, audio, design, media, it",
				},
				{
					name: "theme-color",
					content: "#6dab1e",
				},
				{
					property: "og:title",
					content: title,
				},
				{
					property: "og:description",
					content: metaDescription,
				},
				{
					property: "og:type",
					content: "website",
				},
				{
					property: "og:url",
					content: linkCanonical,
				},
				{
					property: "og:site_name",
					content: site.siteMetadata.title,
				},
				{
					property: "og:locale",
					content: "ru_RU",
				},
				{
					name: "twitter:card",
					content: "summary",
				},
				{
					name: "twitter:creator",
					content: site.siteMetadata.author,
				},
				{
					name: "twitter:title",
					content: title,
				},
				{
					name: "twitter:description",
					content: metaDescription,
				},
			].concat(meta)}
		/>
	)
}

export default SEO
