import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = (): Queries.SiteSiteMetadata => {
	const { site } = useStaticQuery(
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
	);

	return site.siteMetadata;
};

export default useSiteMetadata;
