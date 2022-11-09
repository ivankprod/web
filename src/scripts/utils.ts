export function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export function encodeFormBody(data: any) {
	return Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
}

export default { sleep, encodeFormBody }
