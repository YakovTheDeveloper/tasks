let x = 10;
let y = 20;

const swapVariables = (a, b) => [b, a];
[x, y] = swapVariables(x, y);
console.log(x, y);


x = 100
y = 200
// Bitwise XOR, works with integers only
const swapVariables2 = (a, b) => {
	a = a ^ b
	b = a ^ b
	a = a ^ b
	return [a, b]
}
console.log(swapVariables2(x, y));

x = 400.1
y = 600.5
// Works with numbers only
const swapVariables3 = (a, b) => {
	a = a + b;
	b = a - b;
	a = a - b;
	return [a, b]
}
console.log(swapVariables3(x, y));
