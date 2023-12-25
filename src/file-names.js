/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const temp = {};
  names.forEach((element, idx, arr) => {
    const curArr = arr;
    if (temp[element]) {
      curArr[idx] = `${element}(${temp[element]})`;
      temp[`${element}(${temp[element]})`] = 1;
      temp[element] += 1;
      return;
    }
    temp[element] = 1;
    curArr[idx] = `${element}`;
  });
  return names;
}
module.exports = {
  renameFiles,
};
