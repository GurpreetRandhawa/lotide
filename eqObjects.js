const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
const eqObjects = function(object1, object2) {
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
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
assertEqual(
  eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
  true
);

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(
  eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
  false
);
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(
  eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
  false
);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
