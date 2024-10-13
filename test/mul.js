const { expect, assert } = require('chai');
const Mtrx = require('mtrx');

describe('mul', function() {
    it('multiplies matrix by number', function() {
        const matrix1 = new Mtrx([[1, 2], [3, 4]]);
        const number = 2;
        const expected = new Mtrx([[2, 4], [6, 8]]);
        const result = Mtrx.mul(matrix1, number);
        expect(Mtrx.equalAll(result, expected)).to.be.true;
    });

    it('multiplies matrix by matrix', function() {
        const matrix1 = new Mtrx([[1, 2], [3, 4]]);
        const matrix2 = new Mtrx([[1, 2], [3, 4]]);
        const expected = new Mtrx([[7, 10], [15, 22]]);
        const result = Mtrx.mul(matrix1, matrix2);
        expect(Mtrx.equalAll(result, expected)).to.be.true;
    });
    
    describe('should return error', function() {
        it('if the first parameter is not a matrix or number', function() {
            const matrix = new Mtrx([[1, 2], [3, 4]]);
            expect(() => Mtrx.mul('two', matrix)).to.throw(TypeError);
        });
        
        it('if the second parameter is not a matrix or number', function() {
            const matrix = new Mtrx([[1, 2], [3, 4]]);
            expect(() => Mtrx.mul(matrix, 'two')).to.throw(TypeError);
        });
        
        it('if the number of columns in the first matrix is not equal to the number of rows in the second matrix', function() {
            const matrix1 = new Mtrx([[1, 2, 3], [4, 5, 6]]);
            const matrix2 = new Mtrx([[1, 2], [4, 5]]);
            expect(() => Mtrx.mul(matrix1, matrix2)).to.throw(TypeError);
        });

        it('if matrices are empty', function() {
            const matrix1 = [[]];
            const matrix2 = [[]];
            expect(() => Mtrx.mul(matrix1, matrix2)).to.throw(TypeError);
        });
    });
});