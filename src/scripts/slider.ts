import { sleep } from "scripts/utils";

export type SliderEvent = (slider: SliderClass) => void;
type SliderEvents = Map<string, SliderEvent>;

export type SliderConfig = {
	speed: number;

	autoplay: { delay: number };

	pagination: {
		element: string;
		clickable: boolean;
	};

	events: SliderEvents;
};

export class SliderClass {
	elemContainer: HTMLElement | null;
	slidesList!: HTMLElement[];
	maxSlideHeight: number | undefined;
	activeIdx!: number;
	events!: SliderEvents;
	speed!: number;
	paginationElement!: HTMLDivElement | null;
	paginationClickable!: boolean;
	paginationBullets!: HTMLDivElement[];
	paginationInitialized!: boolean;
	autoplayEnabled!: boolean;
	autoplayDelay!: number;
	private _timer!: number | null;

	constructor(sliderContainerID: string, sliderConfig: SliderConfig) {
		this.elemContainer = document.getElementById(sliderContainerID);
		if (!this.elemContainer) return;

		this.slidesList = Array.from(this.elemContainer.querySelectorAll(".slider-slide"));
		if (!this.slidesList || this.slidesList.length == 0) return;

		this.maxSlideHeight = Math.max.apply(
			null,
			this.slidesList.map((elem) => elem.clientHeight)
		);
		this.slidesList.forEach((elem) => {
			elem.style.height = this.maxSlideHeight + "px";
		});

		(this.elemContainer.children[0] as HTMLElement).style.height = this.maxSlideHeight + "px";

		this.activeIdx = 0;

		this.events = sliderConfig.events ? sliderConfig.events : new Map();

		this.speed = sliderConfig.speed ? sliderConfig.speed : 600;

		this.paginationBullets = [];
		this.paginationElement =
			sliderConfig.pagination && sliderConfig.pagination.element
				? this.elemContainer.querySelector(sliderConfig.pagination.element)
				: null;
		this.paginationClickable =
			sliderConfig.pagination && sliderConfig.pagination.clickable && this.paginationElement
				? sliderConfig.pagination.clickable
				: false;
		if (this.paginationClickable) this.initPagination();

		this.autoplayEnabled = sliderConfig.autoplay ? true : false;
		this.autoplayDelay =
			sliderConfig.autoplay && sliderConfig.autoplay.delay ? sliderConfig.autoplay.delay : 0;

		this.fireCurr(0);

		return this;
	}

	get activeIndex() {
		return this.activeIdx - 1;
	}
	get slides() {
		return this.slidesList;
	}

	fireNext() {
		if (this.activeIdx != undefined) this.fire(this.activeIdx - 1, (this.activeIdx += 1));
	}
	firePrev() {
		if (this.activeIdx != undefined) this.fire(this.activeIdx - 1, (this.activeIdx -= 1));
	}
	fireCurr(index: number) {
		if (!this.elemContainer) return false;

		if (this._timer) {
			window.clearInterval(this._timer);
			this._timer = null;
		}

		this.fire(this.activeIdx - 1, (this.activeIdx = index + 1));
	}

	fire(prev: number, index: number) {
		if (!this.elemContainer) return false;

		const showSlide = () => {
			if (index > this.slidesList.length) this.activeIdx = 1;
			if (index < 1) this.activeIdx = this.slidesList.length;

			this.events?.get("transitionStart")?.(this);

			if (this.paginationBullets)
				this.paginationBullets[this.activeIdx - 1].classList.add(
					"slider-pagination-bullet-active"
				);

			const slide = this.slidesList[this.activeIdx - 1];
			if (slide) {
				slide.style.zIndex = "11";
				slide.style.opacity = "1";
			}

			sleep(this.speed + 10).then(() => {
				this.events?.get("transitionEnd")?.(this);

				if (!this._timer && this.autoplayEnabled) this.startAutoplay();
			});
		};

		const activeSlide = this.slidesList[prev];
		if (activeSlide && activeSlide.style.opacity == "1") {
			activeSlide.style.opacity = "0";

			sleep(this.speed + 10).then(() => {
				activeSlide.style.zIndex = "10";
				this.paginationBullets[prev].classList.remove("slider-pagination-bullet-active");

				showSlide();
			});
		} else {
			showSlide();
		}
	}

	startAutoplay() {
		if (this.autoplayEnabled) {
			this._timer = window.setInterval(() => {
				this.fireNext();
			}, this.autoplayDelay + this.speed * 2);
		} else return false;
	}

	initPagination() {
		if (!this.paginationElement || this.paginationInitialized) return false;

		const wrapper = this.paginationElement;

		this.slidesList.forEach((_, i) => {
			const bullet = document.createElement("div");

			bullet.setAttribute("key", "bullet-" + String(i));
			bullet.classList.add("slider-pagination-bullet");
			if (this.paginationClickable)
				bullet.onclick = () => {
					this.fireCurr(i);
				};

			this.paginationBullets[i] = bullet;
			wrapper.append(bullet);
		});

		this.paginationInitialized = true;
	}

	destroy() {
		if (this._timer) {
			window.clearInterval(this._timer);
			this._timer = null;
		}

		this.events?.clear();
		this.elemContainer = null;
		this.slidesList = [];
	}
}

declare global {
	interface Window {
		slider: SliderClass;
	}
}
