const { expect, assert } = require('chai');
const Mtrx = require('mtrx');

describe('sub', function() {
    it('subtracts two matrices', function() {
        const matrix1 = new Mtrx([[1, 2], [3, 4]]);
        const matrix2 = new Mtrx([[1, 2], [3, 4]]);
        const expected = new Mtrx([[0, 0], [0, 0]]);
        const result = Mtrx.sub(matrix1, matrix2);
        expect(Mtrx.equalAll(result, expected)).to.be.true;
    });

    describe('should return error', function() {
        it('if first parameter is not matrix', function() {
            const matrix = new Mtrx([[1, 2], [3, 4]]);
            expect(() => Mtrx.sub('two', matrix)).to.throw(TypeError);
        });
        
        it('if second parameter is not matrix', function() {
            const matrix = new Mtrx([[1, 2], [3, 4]]);
            expect(() => Mtrx.sub(matrix, 2)).to.throw(TypeError);
        });
        
        it('if matrices have different dimensions', function() {
            const matrix1 = new Mtrx([[1, 2, 3], [4, 5, 6]]);
            const matrix2 = new Mtrx([[1, 2], [3, 4]]);
            expect(() => Mtrx.sub(matrix1, matrix2)).to.throw(TypeError);
        });

        it('if matrices are empty', function() {
            const matrix1 = [[]];
            const matrix2 = [[]];
            expect(() => Mtrx.sub(matrix1, matrix2)).to.throw(TypeError);
        });
    });
});