export { };

declare global {
	interface Window {
		lastRAF: number | null;
	}
}
