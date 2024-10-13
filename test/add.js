const { expect, assert } = require('chai');
const Mtrx = require('mtrx');

describe('add', function() {
    it('adds two matrices', function() {
        const matrix1 = new Mtrx([[1, 2], [3, 4]]);
        const matrix2 = new Mtrx([[1, 2], [3, 4]]);
        const expected = new Mtrx([[2, 4], [6, 8]]);
        const result = Mtrx.add(matrix1, matrix2);
        expect(Mtrx.equalAll(result, expected)).to.be.true;
    });

    describe('should return error', function() {
        it('if first parameter is not matrix', function() {
            const matrix = new Mtrx([[1, 2], [3, 4]]);
            expect(() => Mtrx.add('two', matrix)).to.throw(TypeError);
        });
        
        it('if second parameter is not matrix', function() {
            const matrix = new Mtrx([[1, 2], [3, 4]]);
            expect(() => Mtrx.add(matrix, 2)).to.throw(TypeError);
        });
        
        it('if matrices have different dimensions', function() {
            const matrix1 = new Mtrx([[1, 2, 3], [4, 5, 6]]);
            const matrix2 = new Mtrx([[1, 2], [3, 4]]);
            expect(() => Mtrx.add(matrix1, matrix2)).to.throw(TypeError);
        });

        it('if matrices are empty', function() {
            const matrix1 = [[]];
            const matrix2 = [[]];
            expect(() => Mtrx.add(matrix1, matrix2)).to.throw(TypeError);
        });
    });
});