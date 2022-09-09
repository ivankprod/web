exports.onCreatePage = async ({ page, actions }) => {
	const { createRedirect } = actions;

	if (!page.path.endsWith(".html")) {
		const isIndex = page.path === "/";
		const legacyUrl = isIndex ? "/index.html" : page.path.replace(/\/$/, ".html");

		createRedirect({
			fromPath: legacyUrl,
			toPath: page.path,
			isPermanent: true
		});
	}
};
