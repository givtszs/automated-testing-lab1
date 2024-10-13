const { assert } = require('chai');
const Mtrx = require('mtrx');

describe('isDiag', function() {
    it('should return true if matrix is diagonal', function() {
        const matrix = new Mtrx([[1, 0], [0, 2]]);
        assert.isTrue(Mtrx.isDiag(matrix));
    });

    describe('should return false', function() {
        it('matrix is not square', function() {
            const matrix = new Mtrx([[1, 0, 0], [0, 0, 0]]);
            assert.isFalse(Mtrx.isDiag(matrix));
        });
    
        it('if at least one of the matrix elements outside the main diagonal is not zero', function() {
            const matrix = new Mtrx([[1, 0, 2], [0, 2, 0], [0, 0, 3]]);
            assert.isFalse(Mtrx.isDiag(matrix));
        });

        it('if matrix is empty', function() {
            const matrix = [[]];
            assert.isFalse(Mtrx.isDiag(matrix));
        });

        describe('if parameter is not matrix', function() {
            function makeTest(matrix) {
                it(`parameter is ${typeof matrix}`, function() {
                    assert.isFalse(Mtrx.isDiag(matrix));
                });
            }

            makeTest(2);
            makeTest(2n);
            makeTest('two');
            makeTest(null);
            makeTest();
        });
    });
});