// with built-in method (don't know if it uses conditionals/comparisons)
const maxNum = (num1, num2) => Math.max(num1, num2)
console.log(maxNum(123123123132323, 1));


// works only with 31bit integers because
// 32 bit - limitation of bitwise operators in JavaScript
const CHAR_BIT = 4;
const INT_BIT = 8;
const MAX_BIT = INT_BIT * CHAR_BIT - 1

function max(x, y) {
	return x - ((x - y) & ((x - y) >> MAX_BIT));
}
console.log(max(1999990000, 2000000));

/* 
	Right shift (>>) operator:

	(a - b) >> 31:
	-1 if (a - b) negative
	 0 if (a - b) positive

	Bitwise AND (&)
	10 & -1 = 10
	10 & 0 = 0

*/