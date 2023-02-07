const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
const countLetters = function(string) {
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
console.log(countLetters("lighthouse in the house"));
