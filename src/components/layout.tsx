import React from "react"

import Header from "./header"
import Footer from "./footer"

import "normalize.css"
import "../fonts/fontawesome/css/solid.min.css"
import "../styles/app.css"

interface LayoutProps {
	scope?: string
	children?: any
}

const Layout: React.FC<LayoutProps> = ({ scope = "", children = {} }) => {
	return (
		<>
			<div id="master-container" className="master-container">
				<Header scope={scope}></Header>
				{children}
				<Footer/>
			</div>
		</>
	)
}

export default Layout
