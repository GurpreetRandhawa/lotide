const flatten = function (arr) {
  let array = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      array.push(...i);
    } else {
      array.push(i);
    }
  }
  return array;
};
module.exports = flatten;
