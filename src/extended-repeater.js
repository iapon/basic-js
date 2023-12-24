const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = '';
  let finalAddition = '';
  let separator = '+';
  if (options.separator) {
    separator = String(options.separator);
  }
  if (typeof options.addition !== 'undefined') {
    finalAddition = repeater(options.addition, {
      repeatTimes: options.additionRepeatTimes,
      separator: options.additionSeparator
        ? String(options.additionSeparator)
        : '|',
    });
  }
  if (+options.repeatTimes > 0) {
    for (let i = 0; i < +options.repeatTimes; i += 1) {
      if (i === 0) {
        res += `${str}${finalAddition}`;
      } else {
        res += `${separator}${str}${finalAddition}`;
      }
    }
    return res;
  }
  return `${str}${finalAddition}`;
  // remove line with error and write your code here
}

module.exports = {
  repeater,
};
