import type { GatsbyNode } from "gatsby";

import { slides } from "./content/slides.json";

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
	actions,
	createNodeId,
	createContentDigest
}) => {
	slides.forEach(
		(slide: {
			id: string;
			caption: string;
			text: { id: string; line: string }[];
			action: { text: string; url: string };
		}) => {
			const { id, caption, text, action } = slide;

			const node = {
				caption,
				text,
				action,
				id: createNodeId(id),
				internal: { type: "Slide", contentDigest: createContentDigest(slide) }
			};

			actions.createNode(node);
		}
	);
};
