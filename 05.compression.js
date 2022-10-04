const strCompression = (str) => {
	let resultStr = ""
	for (let i = 0, count = 0; i < str.length; i++) {
		const char = str[i]
		const nextChar = str[i + 1]
		count++
		if (nextChar === char) continue
		resultStr += char + count
		count = 0
	}
	return resultStr
}
console.log(strCompression("ааbсссссааа") === "а2b1с5а3");
console.log(strCompression("qqqqqqqqqqwwwwweqq") === "q10w5e1q2");