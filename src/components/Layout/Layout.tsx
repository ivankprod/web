import React, { ReactNode } from "react"

import Header from "../Header"
import Footer from "../Footer"

import "normalize.css"
import "../../fonts/fontawesome/css/solid.min.css"
import "../../styles/utils/reset.css"

import "./Layout.css"

interface LayoutProps {
	children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children = undefined }) => {
	return (
		<div id="master-container" className="master-container">
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
