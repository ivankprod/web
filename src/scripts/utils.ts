export const sleep = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms));

export const encodeFormBody = (data: object) =>
	Object.keys(data)
		.map(
			(key) =>
				encodeURIComponent(key) +
				"=" +
				encodeURIComponent(data[key as keyof typeof data])
		)
		.join("&");
