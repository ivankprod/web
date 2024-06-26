import React from "react";

import "normalize.css";
import "./Layout.scss";

import Header from "components/Header";
import Footer from "components/Footer";

interface LayoutProps extends React.PropsWithChildren {}

const Layout: React.FC<LayoutProps> = ({ children = undefined }) => {
	return (
		<div id="master-container" className="master-container">
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
