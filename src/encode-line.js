const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let acc = 1;
  let res = '';
  Array.from(str).forEach((el, idx) => {
    if (idx > 0) {
      if (el === str[idx - 1]) {
        acc += 1;
      } else {
        res += `${acc !== 1 ? acc : ''}${str[idx - 1]}`;
        acc = 1;
      }
      if (str.length - 1 === idx) {
        res += `${acc !== 1 ? acc : ''}${el}`;
      }
    }
  });
  return res;
}
module.exports = {
  encodeLine,
};
