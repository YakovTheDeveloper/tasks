const clearMatrixRowsAndCols = (matrix) => {

	const rowsToClear = new Set()
	const colsToClear = new Set()

	for (let i = 0; i < matrix.length; i++) {
		const row = matrix[i];
		for (let j = 0; j < row.length; j++) {
			const el = row[j];
			if (!el) {
				rowsToClear.add(i)
				colsToClear.add(j)
			}
		}
		if (rowsToClear.has(i)) matrix[i].fill(0);
	}
	for (let i = 0; i < matrix.length; i++) {
		const row = matrix[i];
		for (let j = 0; j < row.length; j++) {
			if (colsToClear.has(j)) matrix[i][j] = 0
		}
	}
	return matrix
}

const matrix1 = [
	[1, 0, 3, 0],
	[1, 2, 3, 1],
	[1, 0, 3, 1],
	[1, 2, 3, 1],
	[1, 2, 3, 1],
]

const matrix2 = [
	[0, 1, 1, 0],
	[1, 1, 1, 1],
	[1, 1, 1, 1],
	[1, 0, 1, 1],
	[1, 1, 1, 1],
	[1, 1, 1, 1],
]

const clearedMatrix1 = [
	[0, 0, 0, 0],
	[1, 0, 3, 0],
	[0, 0, 0, 0],
	[1, 0, 3, 0],
	[1, 0, 3, 0],
]
const clearedMatrix2 = [
	[0, 0, 0, 0],
	[0, 0, 1, 0],
	[0, 0, 1, 0],
	[0, 0, 0, 0],
	[0, 0, 1, 0],
	[0, 0, 1, 0],
]

console.log(clearMatrixRowsAndCols(matrix1))
console.log(clearMatrixRowsAndCols(matrix2));

console.log(`
	Matrix 1 cleared?
	${matrix1.toString() === clearedMatrix1.toString()}
`);
console.log(`
	Matrix 2 cleared?
	${matrix2.toString() === clearedMatrix2.toString()}
`);

