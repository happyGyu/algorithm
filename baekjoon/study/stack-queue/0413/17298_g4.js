const input = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n")[1]
  .trim()
  .split(" ")
  .map((n) => Number(n));

const arr = [];
let max = 0;
let answer = "";
while (input.length) {
  const curr = input.pop();
  if (curr >= max) {
    max = curr;
    answer = "-1 " + answer;
  } else {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] > curr) {
        answer = `${arr[i]} ` + answer;
        break;
      }
    }
  }
  arr.push(curr);
}
console.log(answer);
