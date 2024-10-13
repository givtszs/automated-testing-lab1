const Mtrx = require("mtrx");
const isSquare = require("mtrx/src/isSquare");
const { assert } = require("chai");

describe("isSquare", function () {
    describe("should return true when number of rows equals cols", function () {
        function makeTest(number) {
            const matrix = new Mtrx(number, number);
            it(`rows = ${number}, cols = ${number}`, function () {
                assert.isTrue(isSquare(matrix));
            });
        }

        for (let i = 1; i <= 5; i++) {
            makeTest(i);
        }
    });

    describe("should return false when number of rows does not equal cols", function () {
        function makeTest(rows, cols) {
            const matrix = new Mtrx(rows, cols);
            it(`rows = ${rows}, cols = ${cols}`, function () {
                assert.isFalse(isSquare(matrix));
            });
        }
        
        for (let i = 1; i <= 5; i++) {
            makeTest(i, i + 1);
        }
    });

    it('should return true when matrix has only one element', function() {
        const matrix = new Mtrx([[0]]);
        assert.isTrue(isSquare(matrix));
    });

    it('should return false if matrix is empty', function() {
        assert.isFalse(isSquare([[], []]));
    });

    describe('should return false if parameter type is not a matrix', function() {
        function makeTest(matrix) {
            it(`parameter is ${typeof matrix}`, function() {
                assert.isFalse(isSquare(matrix));
            });
        }

        makeTest(2);
        makeTest(2n);
        makeTest('two');
        makeTest(null);
        makeTest();
    });
});