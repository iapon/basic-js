const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix ) {
  let acc = 0;
  matrix.forEach(el => { Array.from(el).forEach((el)=> {if(el=="^^"){ acc++;}})})
  return acc
}

module.exports = {
  countCats
};
