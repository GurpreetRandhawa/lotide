const countLetters = function (string) {
  let result = {};
  for (let i of string.split(" ").join("")) {
    if (result[i]) {
      result[i] += 1;
    } else {
      result[i] = 1;
    }
  }
  return result;
};
module.exports = countLetters;
