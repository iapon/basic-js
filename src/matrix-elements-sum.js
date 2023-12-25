const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  function transpose(a) {
    return Object.keys(a[0]).map((c) => {
      return a.map((r) => {
        return r[c];
      });
    });
  }
  const transposed = transpose(matrix);
  console.log(transposed);
  return transposed.reduce((total, current) => {
    return (
      Array.from(current).reduce((prev, acc, i, arr) => {
        if (acc === 0) {
          arr.splice(i);
        }
        return prev + acc;
      }) + total
    );
  }, 0);
}
module.exports = {
  getMatrixElementsSum,
};
