import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = (): Queries.SiteSiteMetadata =>
	useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						siteUrl
					}
				}
			}
		`
	).site.siteMetadata;

export default useSiteMetadata;
