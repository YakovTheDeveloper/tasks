export const measurePerformance = (cb) => {
	const t1 = performance.now()
	cb()
	const t2 = performance.now()
	console.log("Operation time: ", (t2 - t1).toFixed(2), "ms");
	return t2 - t1
}