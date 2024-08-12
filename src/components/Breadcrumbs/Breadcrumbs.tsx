import React from "react";
import { Link } from "gatsby";

import useSiteMetadata from "hooks/useSiteMetadata";

import { Page } from "models/page";

import "./Breadcrumbs.scss";

interface BreadcrumbsProps {
	page: Page;
	parentPages?: Page[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
	page,
	parentPages = []
}) => {
	const siteMetadata = useSiteMetadata();

	return (
		<div className="breadcrumbs rounded-bottom">
			<div>
				<ul itemScope itemType="http://schema.org/BreadcrumbList">
					<li
						className="breadcrumb"
						itemScope
						itemType="http://schema.org/ListItem"
						itemProp="itemListElement"
					>
						<Link
							itemScope
							itemType="http://schema.org/WebPage"
							itemProp="item"
							id={siteMetadata.siteUrl!}
							to="/"
						>
							<span itemProp="name">Главная</span>
						</Link>
						<meta itemProp="position" content="1" />
					</li>
					{parentPages.map(({ title, path }: Page, index: number) => (
						<li
							className="breadcrumb"
							itemScope
							itemType="http://schema.org/ListItem"
							itemProp="itemListElement"
							key={siteMetadata.siteUrl + "/" + path + "/"}
						>
							<Link
								itemScope
								itemType="http://schema.org/WebPage"
								itemProp="item"
								id={siteMetadata.siteUrl + "/" + path + "/"}
								to={"/" + path + "/"}
							>
								<span itemProp="name">{title}</span>
							</Link>
							<meta
								itemProp="position"
								content={String(index + 2)}
							/>
						</li>
					))}
					<li
						className="breadcrumb"
						itemScope
						itemType="http://schema.org/ListItem"
						itemProp="itemListElement"
					>
						<span
							className="breadcrumb_last__text"
							itemScope
							itemType="http://schema.org/WebPage"
							itemProp="item"
						>
							<span itemProp="name">{page.title}</span>
						</span>
						<meta
							itemProp="position"
							content={String(2 + parentPages.length)}
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Breadcrumbs;
