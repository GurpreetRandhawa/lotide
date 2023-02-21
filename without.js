const without = function (array1, array2) {
  let array3 = [];
  for (let i of array1) {
    if (i !== array2[0]) {
      array3.push(i);
    }
  }
  return array3;
};
module.exports = without;
