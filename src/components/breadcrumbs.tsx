import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export type Page = {
	title: string,
	path?: string
}

interface BreadcrumbsProps {
	page: Page,
	parentPages?: Page[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ page, parentPages = [] }) => {
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
		<div id="breadcrumbs" className="breadcrumbs rounded-bottom">
			<div>
				<ul itemScope itemType="http://schema.org/BreadcrumbList">
					<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
						<Link itemScope itemType="http://schema.org/WebPage" itemProp="item" id={site.siteMetadata.siteUrl} to="/">
							<span itemProp="name">Главная</span>
						</Link>
						<meta itemProp="position" content="1" />
					</li>
					{parentPages.map(({ title, path }: Page, index: number) => (
						<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem"
							key={site.siteMetadata.siteUrl + "/" + path + "/"}
						>
							<Link itemScope itemType="http://schema.org/WebPage" itemProp="item" id={site.siteMetadata.siteUrl + "/" + path + "/"} to={"/" + path + "/"}>
								<span itemProp="name">{title}</span>
							</Link>
							<meta itemProp="position" content={String(index + 2)} />
						</li>
					))}
					<li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
						<span itemScope itemType="http://schema.org/WebPage" itemProp="item" className="breadcrumbs-last">
							<span itemProp="name">{page.title}</span>
						</span>
						<meta itemProp="position" content={String(2 + parentPages.length)} />
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Breadcrumbs
