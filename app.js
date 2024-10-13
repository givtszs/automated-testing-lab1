const Mtrx = require('mtrx');

const matrix1 = new Mtrx([[1, 2], [3, 4]]);
const matrix2 = new Mtrx([[1, 2], [3, 4]]);
const expected = new Mtrx([[2, 4], [6, 8]]);
const result = Mtrx.add(matrix1, matrix2);

console.log(matrix1);
console.log(matrix2);
console.log(expected);
console.log(result);
console.log(expected == result);
console.log(Mtrx.equalAll(result, expected));