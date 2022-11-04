import React, { Fragment, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { animate, drawOpacity, makeLinear } from "../scripts/animate";
import { sleep } from "../scripts/utils";

import Button, { ButtonSize } from "./controls/button";

import "../styles/components/slider.css"

let emptySlidesList: NodeListOf<HTMLElement>;

type SliderConfig = {
	speed: number,

	autoplay: { delay: number },

	pagination: {
		element: string,
		clickable: boolean
	}
};

class SliderClass {
	elemContainer: HTMLElement | null;
	slidesList!: NodeListOf<HTMLElement>;
	maxSlideHeight: number | undefined;
	activeIdx!: number;
	events!: any;
	speed!: number;
	paginationElement!: any;
	paginationClickable!: boolean;
	paginationBullets!: HTMLDivElement[];
	autoplayEnabled!: boolean;
	autoplayDelay!: number;
	private _timer: any;

	constructor(sliderContainerID: string, sliderConfig: SliderConfig) {
		this.elemContainer = document.getElementById(sliderContainerID);
		if (!this.elemContainer) return;

		this.slidesList = this.elemContainer.querySelectorAll('.slider-slide');
		if (!this.slidesList || this.slidesList.length == 0) return;

		this.maxSlideHeight = Math.max.apply(null, Array.from(this.slidesList).map(elem => {
			return elem.clientHeight;
		}));
		Array.from(this.slidesList).filter(elem => { elem.style.height = this.maxSlideHeight + 'px'; });

		(this.elemContainer.children[0] as HTMLElement).style.height = this.maxSlideHeight + 'px';

		this.activeIdx = 0;
		this.events = {};
		this.paginationBullets = [];

		this.speed = sliderConfig.speed ? sliderConfig.speed : 600;

		this.paginationElement = sliderConfig.pagination
			&& sliderConfig.pagination.element
			? this.elemContainer.querySelector(sliderConfig.pagination.element) : null;
		this.paginationClickable = sliderConfig.pagination
			&& sliderConfig.pagination.clickable && this.paginationElement
			? sliderConfig.pagination.clickable : false;

		if (this.paginationClickable) this.initPagination();

		this.autoplayEnabled = sliderConfig.autoplay ? true : false;
		this.autoplayDelay = sliderConfig.autoplay
			&& sliderConfig.autoplay.delay
			? sliderConfig.autoplay.delay : 0;

		this.fireCurr(0);

		return this;
	}

	get activeIndex() { return this.activeIdx - 1; }
	get slides() { return this.slidesList; }

	on(eventName: string, callback: Function) { if (this.events) this.events[eventName] = callback; }

	fireNext() { if (this.activeIdx != undefined) this.fire(this.activeIdx - 1, this.activeIdx += 1); }
	firePrev() { if (this.activeIdx != undefined) this.fire(this.activeIdx - 1, this.activeIdx -= 1); }
	fireCurr(index: number) {
		if (!this.elemContainer) return false;

		if (this._timer) { window.clearInterval(this._timer); this._timer = null; }

		this.fire(this.activeIdx - 1, this.activeIdx = index + 1);
	}

	fire(prev: number, index: number) {
		if (!this.elemContainer) return false;

		const showSlide = () => {
			if (index > this.slidesList.length) this.activeIdx = 1;
			if (index < 1) this.activeIdx = this.slidesList.length;

			if (this.events['transitionStart']) this.events['transitionStart'](this);

			if (this.paginationBullets) this.paginationBullets[this.activeIdx - 1].classList.add('slider-pagination-bullet-active');

			this.slidesList[this.activeIdx - 1].style.zIndex = '11';
			this.slidesList[this.activeIdx - 1].style.opacity = '1';

			sleep(this.speed + 10).then(() => {
				if (this.events['transitionEnd']) this.events['transitionEnd'](this);

				if (!this._timer && this.autoplayEnabled) this.startAutoplay();
			});
		};

		const activeSlide = this.slidesList[prev];
		if (activeSlide && activeSlide.style.opacity == '1') {
			activeSlide.style.opacity = '0';

			sleep(this.speed + 10).then(() => {
				activeSlide.style.zIndex = '10';
				this.paginationBullets[prev].classList.remove('slider-pagination-bullet-active');

				showSlide();
			});
		} else { showSlide(); }
	}

	startAutoplay() {
		if (this.autoplayEnabled) { this._timer = window.setInterval(() => { this.fireNext(); }, this.autoplayDelay + this.speed * 2); }
		else return false;
	}

	initPagination() {
		if (!this.paginationElement) return false;

		const wrapper = this.paginationElement;

		this.slidesList.forEach((_, i) => {
			const bullet = document.createElement('div');

			bullet.setAttribute("key", "bullet-" + String(i));
			bullet.classList.add('slider-pagination-bullet');
			if (this.paginationClickable) bullet.onclick = () => { this.fireCurr(i); };

			this.paginationBullets[i] = bullet;
			wrapper.append(bullet);
		});
	}

	destroy() {
		if (this._timer) { window.clearInterval(this._timer); this._timer = null; }

		this.events = {};
		this.elemContainer = null;
		this.slidesList = emptySlidesList;
	}
}

const onSliderTransitionStart = function (slider: SliderClass) {
	const slide = (slider.slides[slider.activeIndex].children[0] as HTMLElement);

	slide.style.opacity = '0';

	(slide.children[0] as HTMLElement).style.opacity = '0';
	(slide.children[0] as HTMLElement).style.animation = 'none';
	(slide.children[2] as HTMLElement).style.opacity = '0';
	(slide.children[2] as HTMLElement).style.animation = 'none';
}

const onSliderTransitionEnd = function (slider: SliderClass) {
	const slide = (slider.slides[slider.activeIndex].children[0] as HTMLElement);

	animate({
		duration: 800,
		timing: makeLinear,
		elem: slide,
		draw: function (perc: number) { drawOpacity(this.elem, String(perc)); },
		callback: function () {
			if (!this.elem) return;

			(this.elem.children[2] as HTMLElement).style.opacity = '1';
			(this.elem.children[2] as HTMLElement).style.animation = 'slideIn 1000ms cubic-bezier(0.190, 1.000, 0.220, 1.000), fadeIn 400ms linear';
		}
	});

	(slide.children[0] as HTMLElement).style.opacity = '1';
	(slide.children[0] as HTMLElement).style.animation = 'slideBlockTitle 1600ms cubic-bezier(0.190, 1.000, 0.220, 1.000), fadeIn 600ms linear';
}

type Slides = {
	id: string
	caption: string
	text: {
		id: string
		line: string
	}[]
	action: {
		text: string
		url: string
	}
}

const Slider: React.FC = () => {
	useEffect(() => {
		const sliderConfig: SliderConfig = {
			speed: 600,

			autoplay: { delay: 6000 },

			pagination: {
				element: '.slider-pagination',
				clickable: true
			}
		};

		window.slider = new SliderClass('slider-container', sliderConfig);
		window.slider.on('transitionStart', onSliderTransitionStart);
		window.slider.on('transitionEnd', onSliderTransitionEnd);

		return () => {
			if (window.slider) { window.slider.destroy(); }
		}
	}, []);

	const slides = useStaticQuery(
		graphql`query {
			allFile(filter: {relativePath: {eq: "slides.json"}}) {
				nodes {
					childContentJson {
						slides {
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
				}
			}
		}`
	).allFile?.nodes[0]?.childContentJson?.slides

	return (
		<div className="container slider-section">
			<div className="slider-container" id="slider-container">
				<div className="slider-wrapper">
					{slides.map(({ id, caption, text, action }: Slides) => (
						<div key={id} className="slider-slide">
							<div className="slide-block">
								<div className="slide-block-title"><h1>{caption}</h1></div>
								<div className="slide-block-desc">
									{text.map(({ id, line }, index) => (
										index == text.length - 1 ? <span key={id}>{line}</span> : 
										<Fragment key={id}><span>{line}</span><br /></Fragment>
									))}
								</div>
								<Button to={action.url} size={ButtonSize.middle}>{action.text}</Button>
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
