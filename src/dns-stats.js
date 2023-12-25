const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const temp = {};
  domains.forEach((el) =>
    el
      .split('.')
      .reverse()
      .reduce((prev, cur) => {
        if (!temp[`${prev}.${cur}`]) {
          temp[`${prev}.${cur}`] = 1;
        } else {
          temp[`${prev}.${cur}`] += 1;
        }
        return `${prev}.${cur}`;
      }, '')
  );
  return temp;
  // remove line with error and write your code here
}
console.log(getDNSStats(['epam.com']));
module.exports = {
  getDNSStats,
};
