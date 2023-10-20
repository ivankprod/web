import path from 'path'
import fs from 'fs'

import type { GatsbyConfig, IPluginRefOptions } from "gatsby"

const rootDirsConfig: IPluginRefOptions = {};

const srcDirs = fs.readdirSync(path.resolve(__dirname, "src"));
srcDirs.forEach((srcDir) => {
    rootDirsConfig[srcDir] = path.resolve(__dirname, "src", srcDir);
});

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
		{
			resolve: "gatsby-plugin-root-import",
			options: rootDirsConfig
		},
		"gatsby-plugin-netlify",
		"gatsby-plugin-postcss",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				"name": "IvanK Production",
				"short_name": "ivankprod",
				"description": "Продакшн-студия IvanK Production",
				"icon": "src/images/icon.png",
				"lang": "ru",
				"scope": "/",
				"start_url": "/?utm_source=pwa-homescreen&utm_medium=pwa",
				"background_color": "#6dab1e",
				"theme_color": "#6dab1e",
				"display": "standalone",
				"orientation": "portrait"
			}
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-transformer-json",
		"gatsby-transformer-remark",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				"name": "content",
				"path": "./content"
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "legal",
				path: "./content/legal",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				"name": "images",
				"path": "./src/images/"
			},
			__key: "images"
		}
	]
};

export default config;
