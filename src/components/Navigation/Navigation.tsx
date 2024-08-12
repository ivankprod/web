import React from "react";

import MegaMenu from "components/MegaMenu";
import MobileMenu from "components/MobileMenu";

import useMenuJSON from "hooks/useMenuJSON";

interface NavigationProps {
	mobile?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ mobile }) => {
	const menu = useMenuJSON();

	return mobile ? (
		<MobileMenu menuStructure={menu} />
	) : (
		<MegaMenu menuStructure={menu} />
	);
};

export default Navigation;
