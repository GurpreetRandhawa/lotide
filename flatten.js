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
const flatten = function(arr) {
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
console.log(flatten([1, 2, [3, 4], 5, [6]]));
