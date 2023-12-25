/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arr = [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  for (let i = 0; i < rows; i += 1) {
    arr.push([]);
    for (let j = 0; j < cols; j += 1) {
      if (j === 0) {
        arr[i].push([]);
      }
      let acc = 0;
      if (matrix[i][j - 1]) {
        acc += 1;
      }
      if (matrix[i][j + 1]) {
        acc += 1;
      }
      if (matrix[i - 1] && matrix[i - 1][j]) {
        acc += 1;
      }
      if (matrix[i + 1] && matrix[i + 1][j]) {
        acc += 1;
      }
      if (matrix[i + 1] && matrix[i + 1][j - 1]) {
        acc += 1;
      }
      if (matrix[i + 1] && matrix[i + 1][j + 1]) {
        acc += 1;
      }
      if (matrix[i - 1] && matrix[i - 1][j + 1]) {
        acc += 1;
      }
      if (matrix[i - 1] && matrix[i - 1][j - 1]) {
        acc += 1;
      }
      arr[i][j] = acc;
    }
  }
  return arr;
}
module.exports = {
  minesweeper,
};
