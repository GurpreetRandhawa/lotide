const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(object1, object2) {
  const inspect = require("util").inspect;
  //Calling eqObjects with the given parameters as objects can not be compared like primitive data types using ===
  if (eqObjects(object1, object2) === true) {
    console.log(
      `โโโAssertion Passed: ${inspect(object1)} === ${inspect(object2)}`
    );
  } else {
    console.log(
      `๐๐๐ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`
    );
  }
};

module.exports = assertObjectsEqual;
