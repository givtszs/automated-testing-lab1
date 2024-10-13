const { assert } = require('chai');
const Mtrx = require('mtrx');
const isNumbers = require('mtrx/src/isNumbers');

describe('isNumbers', function() {
    it('should return true if all array elements are numbers', function() {
        const matrix = [1, 2, 3];
        assert.isTrue(isNumbers(matrix));
    });

    it('should return false if array is empty', function() {
        assert.isFalse(isNumbers([]));
    });

    it('should return false for nested arrays', function() {
        assert.isFalse(isNumbers([[0]]));
    });

    describe('should return false when at least one of array elements is not a number', function() {
        function makeTest(element) {
            const matrix = [1, element, 3];
            it(`one of the elements is ${typeof element}`, function() {
                assert.isFalse(isNumbers(matrix));
            });
        }

        makeTest('2');
        makeTest(2n);
        makeTest(false);
        makeTest(null);
        makeTest();
    });

    describe('should return false if parameter is not an array', function() {
        function makeTest(array) {
            it(`parameter is ${typeof array}`, function() {
                assert.isFalse(isNumbers(array));
            });
        }

        makeTest(2);
        makeTest(2n);
        makeTest('test');
        makeTest(true);
        makeTest(null);
        makeTest();
    });
});