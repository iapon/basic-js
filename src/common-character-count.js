const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let temp = {};
  let temp2 = {};
  let acc = 0;
  Array.from(s1).forEach(char => {
      temp[char] ?  temp[char] += 1 : temp[char]=1 ;
  });
  Array.from(s2).forEach(char => {
    temp2[char] ?  temp2[char] +=1 :  temp2[char]=1 ;
});
  for (const key in temp) {
    if (Object.hasOwnProperty.call(temp, key)) {
      let res = Math.min(temp[key], temp2[key])
      if (isFinite(res) && !isNaN(res)){
        acc +=res
      } 
    }
  }
  console.log(acc);
  return acc;
}
module.exports = {
  getCommonCharacterCount
};
