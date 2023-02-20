const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i in arr1) {
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        let res = eqArrays(arr1[i], arr2[i]);
        if (!res) {
          return false;
        }
      } else if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};
module.exports = eqArrays;
