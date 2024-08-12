import React from "react";

import "normalize.css";
import "./Layout.scss";

import Header from "components/Header";
import Footer from "components/Footer";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<div id="master-container" className="master-container">
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
