import { graphql, useStaticQuery } from "gatsby";

export const useMetaJSON = (): Queries.ContentJsonMeta =>
	useStaticQuery(
		graphql`
			query {
				allFile(filter: { relativePath: { eq: "meta.json" } }) {
					nodes {
						childContentJson {
							meta {
								worktime
								phone
								email_info
								email_pr
							}
						}
					}
				}
			}
		`
	).allFile?.nodes[0]?.childContentJson?.meta;

export default useMetaJSON;
