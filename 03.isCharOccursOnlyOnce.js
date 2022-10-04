const isCharOccursOnlyOnce = (str) => {
	let result = true
	const charArr = str.split("")

	for (const char of charArr) {
		let occurrence = 0
		for (const char2 of charArr) {
			if (char === char2) occurrence++
		}
		if (occurrence > 1) {
			result = false
			break
		}
	}
	return result
}
console.log(isCharOccursOnlyOnce("qwerty12345!@#$"))
console.log(isCharOccursOnlyOnce("qwerty99345!@#$"))
