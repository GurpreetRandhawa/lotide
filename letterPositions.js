const letterPositions = function (sentence) {
  const results = {};
  for (let i in sentence) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(Number(i));
      } else {
        results[sentence[i]] = [Number(i)];
      }
    }
  }
  return results;
};
let s = "lighthouse in the house";
console.log(letterPositions(s));
