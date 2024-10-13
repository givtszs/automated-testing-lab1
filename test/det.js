const { expect } = require('chai');
const Mtrx = require('mtrx');

describe('det', function() {
    describe('determinant of a matrix with order', function() {
        it('2', function() {
            const matrix = new Mtrx([[1, 2], [3, 4]]);
            const expected = -2;
            expect(matrix.det).to.equal(expected);
        });

        it('3', function() {
            const matrix = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
            const expected = 0;
            expect(matrix.det).to.equal(expected);
        });

        it('4', function() {
            const matrix = new Mtrx([[4, 3, 2, 2], [0, 1, -3, 3], [0, -1, 3, 3], [0, 3, 1 ,1]]);
            const expected = -240;
            expect(matrix.det).to.equal(expected);
        });
    });

    it('determinant of a diagonal matrix', function() {
        const matrix = new Mtrx([[1, 0, 0], [0, 2, 0], [0, 0, 3]]);
        const expected = 6;
        expect(matrix.det).to.equal(expected);
    });

    it('determinant of a singular matrix should equal zero', function() {
        const matrix = new Mtrx([[0, 0], [0, 0]]);
        const expected = 0;
        expect(matrix.det).to.equal(expected);
    });

    it('should return NaN if a matrix is not square', function() {
        const matrix = new Mtrx([[1, 2, 3], [4, 5, 6]]);
        expect(matrix.det).to.be.NaN;
    });
});
