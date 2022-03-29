const input = require("fs").readFileSync("./test.txt").toString().trim().split("\n");
const [totalTypeNum, target] = input[0]
    .trim()
    .split(" ")
    .map((n) => Number(n));
const types = input.slice(1).map((n) => Number(n));
let currCnt = target;
const answers = [];
for (let i = 1; i < types.length; i++) {
    const ratio = types[i] / types[i - 1];
    const remain = currCnt % ratio;
    currCnt = Math.floor(currCnt / ratio);
    answers.push(remain);
    if (currCnt === 0) break;
}
answers.push(currCnt);
console.log(answers.reduce((acc, n) => acc + n));
