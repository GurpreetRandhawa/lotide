const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i in arr1) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}]`);
  }
};
const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  } else {
    let ans = [];
    arr.length % 2 === 0
      ? (ans = arr.slice(arr.length / 2 - 1, arr.length / 2 + 1))
      : ans.push(arr[~~(arr.length / 2)]);
    return ans;
  }
};
console.log(middle([1, 2, 3]));
