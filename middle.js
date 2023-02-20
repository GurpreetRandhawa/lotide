const middle = function (arr) {
  if (arr.length < 3) {
    return [];
  } else {
    let ans = [];
    arr.length % 2 === 0
      ? (ans = arr.slice(arr.length / 2 - 1, arr.length / 2 + 1))
      : ans.push(arr[~~(arr.length / 2)]);
    return ans;
  }
};
module.exports = middle;
