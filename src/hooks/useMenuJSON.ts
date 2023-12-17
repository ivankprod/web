import { graphql, useStaticQuery } from "gatsby"

import { MegaMenuItem } from "models/menu"

export const useMenuJSON = (): MegaMenuItem[] => {
	return useStaticQuery(
		graphql`query {
			allFile(filter: {relativePath: {eq: "menu.json"}}) {
				nodes {
					childContentJson {
						menu {
							id
							title
							href
							scope
							subnav {
								columns {
									id
									title
									items {
										id
										title
										href
									}
								}
							}
						}
					}
				}
			}
		}`
	).allFile?.nodes[0]?.childContentJson?.menu;
}

export default useMenuJSON
