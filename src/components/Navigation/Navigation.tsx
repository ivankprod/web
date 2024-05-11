import React from "react";

import MegaMenu from "components/MegaMenu";
import useMenuJSON from "hooks/useMenuJSON";

import { MegaMenuItem } from "models/menu";

const Navigation: React.FC = () => {
	const menu: MegaMenuItem[] = useMenuJSON();

	return <MegaMenu menuStructure={menu} />;
};

export default Navigation;
