//Function tales in an object and value
const findKeyByValue = function (object, value) {
  for (let i in object) {
    if (object[i] === value) {
      return i;
    }
  }
};
module.exports = findKeyByValue;
