import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const AboutPage = () => {
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
		<Layout scope="about">
			<SEO title="О нас" description="Информация о нашей компании" />
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
							<span itemScope itemType="http://schema.org/WebPage" itemProp="item" className="breadcrumbs-last">
								<span itemProp="name">О нас</span>
							</span>
							<meta itemProp="position" content="2" />
						</li>
					</ul></div>
				</div>
				<div id="content" className="content animate-fadein-css">
					Страница информации о компании
				</div>
			</section>
		</Layout>
	)
}

export default AboutPage
