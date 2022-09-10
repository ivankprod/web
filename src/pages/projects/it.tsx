import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ProjectsITPage = () => {
	const { site } = useStaticQuery(
		graphql`query {
			site {
				siteMetadata {
					siteUrl
				}
			}
		}`
	)

	return (
		<Layout scope="projects">
			<SEO title="IT-проекты" description="Проекты в сфере IT и высоких технологий" />
			<section id="content-holder" className="container">
				<div id="breadcrumbs" className="breadcrumbs rounded-bottom">
					<div><ul itemScope itemType="http://schema.org/BreadcrumbList">
						<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
							<Link itemScope itemType="http://schema.org/WebPage" itemProp="item" id={site.siteMetadata.siteUrl} to="/">
								<span itemProp="name">Главная</span>
							</Link>
							<meta itemProp="position" content="1" />
						</li>
						<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
							<Link itemScope itemType="http://schema.org/WebPage" itemProp="item" id={site.siteMetadata.siteUrl + "/projects/"} to="/projects/">
								<span itemProp="name">Проекты</span>
							</Link>
							<meta itemProp="position" content="2" />
						</li>
						<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
							<span itemScope itemType="http://schema.org/WebPage" itemProp="item" className="breadcrumbs-last">
								<span itemProp="name">IT</span>
							</span>
							<meta itemProp="position" content="3" />
						</li>
					</ul></div>
				</div>
				<div id="content" className="content animate-fadein-css">
					Страница IT-проектов
				</div>
			</section>
		</Layout>
	)
}

export default ProjectsITPage
