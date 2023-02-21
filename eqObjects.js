const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  let objectOneKeys = Object.keys(object1);
  let objectTwoKeys = Object.keys(object2);
  if (objectOneKeys.length !== objectTwoKeys.length) {
    return false;
  } else {
    for (let i in object1) {
      if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
        let result = eqArrays(object1[i], object2[i]);
        if (!result) {
          return false;
        }
      } else if (
        typeof object1[i] === "object" &&
        typeof object2[i] === "object"
      ) {
        let res = eqObjects(object1[i], object2[i]);
        if (!res) {
          return false;
        }
      } else {
        if (object1[i] !== object2[i]) {
          return false;
        }
      }
    }
    return true;
  }
};
module.exports = eqObjects;
