import React from "react";

import MegaMenu from "components/MegaMenu";
import MobileMenu from "components/MobileMenu";

import useMenuJSON from "hooks/useMenuJSON";

interface NavigationProps {
	mobile?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ mobile }) => {
	const menu = useMenuJSON();

	let content: JSX.Element;

	if (mobile) {
		content = <MobileMenu menuStructure={menu} />;
	} else {
		content = <MegaMenu menuStructure={menu} />;
	}

	return <>{content}</>;
};

export default Navigation;
