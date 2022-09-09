import { CreatePageArgs } from "gatsby";

exports.onCreatePage = async ({ page, actions }: CreatePageArgs) => {
	const { deletePage } = actions;

	if (page.path.endsWith(".html")) {
		deletePage(page)
	}
};
