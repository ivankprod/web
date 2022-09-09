import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Footer from "./footer"

import "normalize.css"

interface LayoutProps {
	children?: any
}

const Layout: React.FC<LayoutProps> = ({ children = {} }) => {
	const { site } = useStaticQuery(
		graphql`query {
			site {
				siteMetadata {
					title
				}
			}
		}`
	)

	return (
		<>
			<main>{children}</main>
			<Footer/>
		</>
	)
}

export default Layout
