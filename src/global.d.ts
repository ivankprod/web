export { }

declare global {
	interface Window {
		slider: any;
		lastRAF: number | null;
	}
}
