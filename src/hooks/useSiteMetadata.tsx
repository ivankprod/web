import { graphql, useStaticQuery } from "gatsby"

type siteMetadataProps = {
	title: string,
	description: string,
	author: string,
	siteUrl: string
}

export const useSiteMetadata = (): siteMetadataProps => {
	const { site } = useStaticQuery(
		graphql`query {
			site {
				siteMetadata {
					title
					description
					author
					siteUrl
				}
			}
		}`
	);

	return site.siteMetadata;
}

export default useSiteMetadata
