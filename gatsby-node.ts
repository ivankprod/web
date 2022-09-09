import { CreatePageArgs } from "gatsby";

exports.onCreatePage = async ({ page, actions }: CreatePageArgs) => {
	const { createRedirect } = actions;

	if (page.path.endsWith(".html")) {
		const newUrl = page.path.replace(/\.html$/, "");

		createRedirect({
			fromPath: page.path,
			toPath: newUrl,
			statusCode: 404
		});
	}
};
