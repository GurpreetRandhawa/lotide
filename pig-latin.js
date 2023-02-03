const inputArray = process.argv;
const pigLatin = function(string) {
  let stringPig = string.slice(1) + string[0] + "ay";
  return stringPig;
};
for (let i = 2; i < inputArray.length; i++) {
  let output = pigLatin(inputArray[i]);
  inputArray[i] = output;
}
let truncatedInputArray = inputArray.slice(2);
console.log(...truncatedInputArray);
