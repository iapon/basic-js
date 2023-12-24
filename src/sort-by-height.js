/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sorted = Array.from(arr)
    .sort((a, b) => {
      return a - b;
    })
    .filter((el) => el !== -1);
  arr.forEach((el, idx) => {
    if (el !== -1) {
      // eslint-disable-next-line no-param-reassign
      arr[idx] = sorted.shift();
    }
  });
  return arr;
}

module.exports = {
  sortByHeight,
};
