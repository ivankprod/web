import React, { Fragment, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Button from "elements/Button"
import { ButtonSize } from "models/element"

import { SliderClass, SliderConfig, SliderEvent } from "scripts/slider"
import { animate, drawOpacity, makeLinear } from "scripts/animate"

import "./Slider.css"

const onSliderTransitionStart: SliderEvent = (slider: SliderClass) => {
	const slide = (slider.slides[slider.activeIndex].children[0] as HTMLElement);

	if (slide) {
		slide.style.opacity = "0";

		(slide.children[0].children[0] as HTMLElement).style.opacity = "0";
		(slide.children[0].children[0] as HTMLElement).style.animation = "none";
		(slide.children[0].children[2] as HTMLElement).style.opacity = "0";
		(slide.children[0].children[2] as HTMLElement).style.animation = "none";
	}
}

const onSliderTransitionEnd: SliderEvent = (slider: SliderClass) => {
	const slide = (slider.slides[slider.activeIndex]?.children[0] as HTMLElement);

	if (slide) {
		animate({
			duration: 800,
			timing: makeLinear,
			elem: slide,
			draw: function (perc: number) { drawOpacity(this.elem, String(perc)); },
			callback: function () {
				if (!this.elem?.children[0]) return;

				(this.elem.children[0].children[2] as HTMLElement).style.opacity = "1";
				(this.elem.children[0].children[2] as HTMLElement).style.animation = "slideIn 1000ms cubic-bezier(0.190, 1.000, 0.220, 1.000), fadeIn 400ms linear";
			}
		});

		(slide.children[0].children[0] as HTMLElement).style.opacity = "1";
		(slide.children[0].children[0] as HTMLElement).style.animation = "slideBlockTitle 1600ms cubic-bezier(0.190, 1.000, 0.220, 1.000), fadeIn 600ms linear";
	}
}

const Slider: React.FC = () => {
	useEffect(() => {
		const sliderConfig: SliderConfig = {
			speed: 600,

			autoplay: { delay: 6000 },

			pagination: {
				element: ".slider-pagination",
				clickable: true
			},

			events: new Map<string, SliderEvent>([
				["transitionStart", onSliderTransitionStart],
				["transitionEnd", onSliderTransitionEnd]
			])
		};

		window.slider = new SliderClass("slider-container", sliderConfig);

		return () => {
			if (window.slider) { window.slider.destroy(); }
		}
	}, []);

	const query = useStaticQuery(
		graphql`query Slider {
			slides: allSlide {
				nodes {
					id
					caption
					text {
						id
						line
					}
					action {
						text
						url
					}
				}
			}

			iconWelcome: allFile(filter: {name: {eq: "welcome"}}) {
				nodes {
					childImageSharp {
						gatsbyImageData(
							width: 178
						)
					}
				}
			}

			iconWhyUs: allFile(filter: {name: {eq: "why-us"}}) {
				nodes {
					childImageSharp {
						gatsbyImageData(
							width: 178
						)
					}
				}
			}

			iconNeedHelp: allFile(filter: {name: {eq: "need-help"}}) {
				nodes {
					childImageSharp {
						gatsbyImageData(
							width: 178
						)
					}
				}
			}
		}`
	);

	const slides = query.slides.nodes as Queries.Slide[];

	const iconWelcome = query.iconWelcome.nodes[0] as Queries.File;
	const iconWhyUs = query.iconWhyUs.nodes[0] as Queries.File;
	const iconNeedHelp = query.iconNeedHelp.nodes[0] as Queries.File;
	const icons = [iconWelcome, iconWhyUs, iconNeedHelp];

	return (
		<div className="container slider-section">
			<div className="slider-container" id="slider-container">
				<div className="slider-wrapper">
					{slides.map(({ id, caption, text, action }, index: number) => (
						<div key={id} className="slider-slide">
							<div className="slide-block">
								<div>
									<div className="slide-block-title"><h1>{caption}</h1></div>
									<div className="slide-block-desc">
										{text && text.map((item, index) => (
											index == text.length - 1 ? <span key={item?.id}>{item?.line}</span> :
												<Fragment key={item?.id}><span>{item?.line}</span><br /></Fragment>
										))}
									</div>
									{action && <Button to={action?.url} size={ButtonSize.middle}>{action?.text}</Button>}
								</div>
								{(icons && icons[index]) && <GatsbyImage className="slide-block-icon"
									// eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
									image={icons[index].childImageSharp?.gatsbyImageData!} alt="Welcome!"
								/>}
							</div>
						</div>
					))}
				</div>
				<div className="slider-pagination"></div>
			</div>
		</div>
	)
}

export default Slider
