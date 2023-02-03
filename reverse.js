const inputArray = process.argv;
const reverse = function (string) {
  let reverseString = "";
  for (let j of string) {
    reverseString = j + reverseString;
  }
  return reverseString;
};
for (let i = 2; i < inputArray.length; i++) {
  let output = reverse(inputArray[i]);
  console.log(output);
}
