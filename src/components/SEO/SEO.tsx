import React from "react"

import useSiteMetadata from "hooks/useSiteMetadata"

type Meta = React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>

interface SeoProps {
	title: string;
	description?: string;
	lang?: string;
	meta?: Meta[];
	path?: string;
	robots?: string;
}

const SEO: React.FC<SeoProps> = ({ title, description = "", lang = "ru", meta = [], path = "", robots = "index, follow" }) => {
	const siteMetadata = useSiteMetadata();

	const metaTitle = `${siteMetadata.title!} | ${title}`;
	const metaDescription = description || siteMetadata.description!;
	const linkCanonical = `${siteMetadata.siteUrl}/${path}/`.replace(/\/\/$/, "/");

	const metaDefault: Meta[] = [
		{
			name: "robots",
			content: robots,
		},
		{
			name: "description",
			content: metaDescription,
		},
		{
			name: "keywords",
			content: "ivankprod, ivank, colldier, production, video, audio, design, media, it",
		},
		{
			name: "theme-color",
			content: "#6dab1e",
		},
		{
			property: "og:title",
			content: metaTitle,
		},
		{
			property: "og:description",
			content: metaDescription,
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			property: "og:url",
			content: linkCanonical,
		},
		{
			property: "og:site_name",
			content: siteMetadata.title!,
		},
		{
			property: "og:locale",
			content: "ru_RU",
		},
		{
			name: "twitter:card",
			content: "summary",
		},
		{
			name: "twitter:creator",
			content: siteMetadata.author!,
		},
		{
			name: "twitter:title",
			content: metaTitle,
		},
		{
			name: "twitter:description",
			content: metaDescription,
		}
	];

	const metaFinal = metaDefault.concat(meta);

	return (
		<>
			<html lang={lang} />
			<title>{metaTitle}</title>
			<link rel="canonical" href={linkCanonical} />
			{metaFinal.map(({ name, property, content }: Meta, index: number) => (
				<meta key={`${index}-${name || property}`} name={name} property={property} content={content} />
			))}
		</>
	)
}

export default SEO
