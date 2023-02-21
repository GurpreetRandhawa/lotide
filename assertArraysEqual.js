const eqArrays = require("./eqArrays");
//Takes two arrays as parameter
const assertArraysEqual = function(array1, array2) {
  //eqArrays function called as arrays can not be compared like primitive data types
  if (eqArrays(array1, array2) === true) {
    console.log("✅✅✅Assertion Passed: ", array1, "===", array2);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: ", array1, "!==", array2);
  }
};
module.exports = assertArraysEqual;
