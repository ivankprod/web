import type { GatsbyNode } from "gatsby"

const slides = require('./content/slides.json');

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
	actions,
	createNodeId,
	createContentDigest
}) => {
	slides.slides.forEach((slide: { id: string; caption: string; text: []; icon: string; action: []; }) => {
		const {
			id,
			caption,
			text,
			icon,
			action
		} = slide;

		const node = {
			caption,
			text,
			icon,
			action,
			id: createNodeId(id),
			internal: {
				type: 'Slide',
				contentDigest: createContentDigest(slide),
			},
		};

		actions.createNode(node);
	});
}
