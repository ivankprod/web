import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Button from "../../elements/Button"
import Navigation from "../Navigation/Navigation"

import "./Header.css"

const Header: React.FC = () => {
	const meta = useStaticQuery(
		graphql`query {
			allFile(filter: {relativePath: {eq: "meta.json"}}) {
				nodes {
					childContentJson {
						meta {
							phone
							email_info
						}
					}
				}
			}
		}`
	).allFile?.nodes[0]?.childContentJson?.meta;

	return (
		<header>
			<div className="container header-picture">
				<div className="header-picture-wrapper"></div>
			</div>
			<div className="stretch-container headline">
				<div className="container headline">
					<a href="/">
						<div className="logotype"></div>
					</a>
					<div className="header-right">
						<div></div>
						<div className="global-info">
							<div className="global-info-row">
								<div>{meta?.phone}</div>
								<div className="global-info-stroke">
									<a href={`mailto:${meta?.email_info}`}>{String(meta?.email_info).toUpperCase()}</a>
								</div>
							</div>
							<Button to="/join/">Заполнить бриф</Button>
						</div>
						<Navigation />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
