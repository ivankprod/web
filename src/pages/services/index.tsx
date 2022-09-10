import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ServicesPage = () => {
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
		<Layout scope="services">
			<SEO title="Сервисы" description="Все сервисы" />
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
								<span itemProp="name">Сервисы</span>
							</span>
							<meta itemProp="position" content="2" />
						</li>
					</ul></div>
				</div>
				<div id="content" className="content animate-fadein-css">
					Страница сервисов
				</div>
			</section>
		</Layout>
	)
}

export default ServicesPage
