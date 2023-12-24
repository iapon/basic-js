/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || Object.keys(date).length > 0) {
    throw Error('Invalid date!');
  }
  const month = date.getMonth();
  switch (true) {
    case month <= 1 || month === 11:
      return 'winter';
    case month > 1 && month <= 4:
      return 'spring';
    case month > 4 && month <= 7:
      return 'summer';
    default:
      return 'autumn';
  }
  // remove line with error and write your code here
}

module.exports = {
  getSeason,
};
