import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: "IvanK Production",
		description: "Официальный сайт продакшн-студии IvanK Production",
		author: "IvanK Production",
		siteUrl: "https://ivankprod.ru"
	},

	trailingSlash: "always",
	graphqlTypegen: true,

	plugins: [
		"gatsby-plugin-netlify", "gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap",
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				"icon": "src/images/icon.png"
			}
		},
		"gatsby-plugin-sharp", "gatsby-transformer-sharp",
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				"name": "images",
				"path": "./src/images/"
			},
			__key: "images"
		}
	]
};

export default config;
