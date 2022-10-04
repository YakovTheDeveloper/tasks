const calcStrCharCodeSum = (str) => {
	return str
		.split("")
		.map(char => char.charCodeAt(0))
		.reduce((a, b) => a + b)
}

const isAnagram = (str, str2) => {
	const firstStrCharCodesSum = calcStrCharCodeSum(str.toLowerCase())
	const secondStrCharCodesSum = calcStrCharCodeSum(str2.toLowerCase())
	return firstStrCharCodesSum === secondStrCharCodesSum
		&& str.length === str2.length
}

const isAnagramSecondSolution = (str ,str2) => {
	const a = str.toLowerCase().split('').sort().join('');
	const b = str2.toLowerCase().split('').sort().join('');
	return a === b
}
console.log(isAnagram("hello", "elloh"));
console.log(isAnagram("hello", "ellog"));
console.log('-------------------------');
console.log(isAnagramSecondSolution("hello", "elloh"));
console.log(isAnagramSecondSolution("hello", "ellog"));