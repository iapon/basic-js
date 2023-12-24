const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw Error("'arr' parameter must be an instance of the Array!");
  const res = [];
  for (let idx = 0; idx < arr.length; idx += 1) {
    const element = arr[idx];
    switch (element) {
      case '--double-next':
        if (idx + 1 < arr.length) {
          res.push(arr[idx + 1]);
          res.push(arr[idx + 1]);
          idx += 1;
        }
        break;
      case '--double-prev':
        if (arr[idx - 2] !== '--discard-next') {
          if (res.length > 1) res.push(res[res.length - 1]);
        }
        break;
      case '--discard-next':
        if (idx + 1 !== arr.length) {
          idx += 1;
        }
        break;
      case '--discard-prev':
        if (arr.length > idx - 2) {
          if (arr[idx - 2] !== '--discard-next') res.splice(res.length - 1, 1);
        }
        break;
      default:
        res.push(element);
        break;
    }
  }
  return res;
}

module.exports = {
  transform,
};
