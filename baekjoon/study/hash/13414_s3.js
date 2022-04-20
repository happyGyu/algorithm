const input = require("fs").readFileSync("./test.txt").toString().trim().split("\r\n");
const [n, k] = input[0].split(" ").map((n) => Number(n));
const hash = {};
for (let i = 1; i < input.length; i++) {
  hash[input[i]] = i;
}

const sorted = Object.entries(hash).sort((a, b) => a[1] - b[1]);
const answerArr = sorted.splice(0, n).map((answer) => answer[0]);
console.log(answerArr.join("\n"));
