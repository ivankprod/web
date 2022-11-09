type AnimateOpts = {
	stoppable?: boolean,
	duration: number,
	timing: Function,
	elem?: HTMLElement,
	elemw?: HTMLElement,
	draw?: Function,
	move?: Function,
	callback?: Function
}

export function animate(opts: AnimateOpts) {
	const start = performance.now();

	if (opts.stoppable) { window.lastRAF = null; }

	requestAnimationFrame(function animate(time) {
		let timeFraction = (time - start) / opts.duration;
		if (timeFraction > 1) timeFraction = 1;
		if (timeFraction < 0) timeFraction = 0;

		const progress = opts.timing(timeFraction);

		if (opts.draw) { opts.draw(progress); }
		if (opts.move) { opts.move(progress); }

		if (timeFraction < 1) {
			if (opts.stoppable) { window.lastRAF = requestAnimationFrame(animate); }
			else { requestAnimationFrame(animate); }
		} else {
			if (opts.callback) { opts.callback(); }
		}
	});
}

//  Animations: linear
export function makeLinear(timeFraction: number) {
	return timeFraction;
}

//  Animations: pow
export function makePow(timeFraction: number) {
	return Math.pow(timeFraction, 5);
}

//  Animations: circ
export function makeCirc(timeFraction: number) {
	return 1 - Math.sin(Math.acos(timeFraction));
}

//  Animations: EaseOut
export function makeEaseOut(timing: Function) {
	return function(timeFraction: number) {
		return 1 - timing(1 - timeFraction);
	};
}

//  Animations: EaseInOut
export function makeEaseInOut(timing: Function) {
	return function(timeFraction: number) {
		if (timeFraction < 0.5) return timing(2 * timeFraction) / 2;
		else return (2 - timing(2 * (1 - timeFraction))) / 2;
	};
}

//  Animations: complete timing functions
export const makeLinearEaseInOut = makeEaseInOut(makeLinear);
export const makePowEaseOut      = makeEaseOut(makePow);
export const makeCircEaseInOut   = makeEaseInOut(makeCirc);

//  Animations: opacity 
export function drawOpacity(elem: HTMLElement | undefined, value: string) {
	if (elem) elem.style.opacity = value;
}

//  Animations: async opacity (fadeout)
export async function fadeOut(elem: HTMLElement) {
	elem.style.opacity = '0';
}

//  Animations: height
export function drawHeight(elem: HTMLElement, value: string) {
	elem.style.height = value + 'px';
}

export default {
	animate, makeLinear, makePow, makeCirc, makeEaseOut, makeEaseInOut, makeLinearEaseInOut, makePowEaseOut, makeCircEaseInOut,
	drawOpacity, drawHeight, fadeOut
}
