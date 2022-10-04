
let unknown = '{неизвестно}';
let from0To2 = ['ноль', 'одна', 'две'];
let from0To19 = [
	'ноль', 'один', 'два', 'три', 'четыре',
	'пять', 'шесть', 'семь', 'восемь', 'девять',
	'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать',
	'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'
];
let tens = [
	'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят',
	'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'
];
let hundreds = [
	'сто', 'двести', 'триста', 'четыреста', 'пятьсот',
	'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'
];
let thousands = [
	['тысяча', 'тысячи', 'тысяч'],
	['миллион', 'миллиона', 'миллионов'],
	['миллиард', 'миллиарда', 'миллиардов'],
	['триллион', 'триллиона', 'триллионов'],
	['квадриллион', 'квадриллиона', 'квадриллионов'],
	['квинтиллион', 'квинтиллиона', 'квинтиллионов'],
	['секстиллион', 'секстиллиона', 'секстиллионов'],
	['септиллион', 'септиллиона', 'септиллионов'],
	['октиллион', 'октиллиона', 'октиллионов'],
	['нониллион', 'нониллиона', 'нониллионов'],
	['дециллион', 'дециллиона', 'дециллионов']
];

function intToWords(int) {
	let result = [];
	int = int.toString();

		let selectName = function (number, names) {
			const is5to19 = (number > 4) && (number < 20)
			return names[is5to19 ? 2 : [2, 0, 1, 1, 1, 2][Math.min(parseInt(number) % 10, 5)]];
		};
		let name = null;

		if (int === '0') {
			result.push(from0To2[0]);
		} else {

			let digitTriples = int.replace(/(?=(\d{3})+(?!\d))/g, ' ').split(' ');
			let i = digitTriples.length - 1;
			for (let index in digitTriples) {
				let triple = parseInt(digitTriples[index]);
				if (triple) {
					let digitTripleInWords = [];
					let hundred = Math.floor(triple / 100);
					if (hundred) {
						digitTripleInWords.push(hundreds[hundred - 1]);
						triple -= hundred * 100;
					}
					if (triple > 19) {
						let ten = Math.floor(triple / 10);
						digitTripleInWords.push(tens[ten - 1]);
						triple -= ten * 10;
					}
					if (triple) {
						digitTripleInWords.push(((i === 1) && ([1, 2].indexOf(triple) !== -1)) ? from0To2[triple] : from0To19[triple]);
					}
					if (thousands[i - 1] !== undefined) {
						digitTripleInWords.push(selectName(digitTriples[index], thousands[i - 1]));
					} else if (i !== 0) {
						digitTripleInWords.push(unknown);
					} 
					result.push(digitTripleInWords.join(' '));
				}
				i--;
			}
			if (!result.length) {
				result.push(from0To2[0]);
			}
		}
		if (name) {
			result.push(name);
		}
	return result.join(' ');
}

console.log("324", intToWords(25552));
console.log("100000000", intToWords(100000000));
console.log("1000", intToWords(1000));
console.log("42768", intToWords(42768));
console.log("21001", intToWords(21001));
console.log("19999", intToWords(19999));
console.log("9", intToWords(9));
console.log("30", intToWords(30));
console.log("61", intToWords(61));
console.log("92", intToWords(92));
console.log("15", intToWords(15));
console.log("16", intToWords(16));
console.log("101", intToWords(101));
console.log("901", intToWords(901));
console.log("997", intToWords(997));
console.log("336", intToWords(336));
console.log("999", intToWords(999));
console.log("481", intToWords(481));

