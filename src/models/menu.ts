export type MenuItem = {
	id: string;
	title: string;
	href: string;
	scope?: string;
};

export type MenuSubnavColumn = {
	id: string;
	title: string;
	items: MenuItem[];
};

export type MegaMenuItem = MenuItem & {
	subnav?: {
		columns: MenuSubnavColumn[];
	};
};
