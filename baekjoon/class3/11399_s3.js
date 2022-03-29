const input = require("fs").readFileSync("./test.txt").toString().trim().split("\n");
const times = input[1]
    .trim()
    .split(" ")
    .map((n) => Number(n))
    .sort((a, b) => a - b);

//첫 풀이
const summedArr = [];
let summed = 0;
for (const time of times) {
    summed += time;
    summedArr.push(summed);
}
console.log(summedArr.reduce((acc, n) => acc + n));

//more sexier;
let answer = 0;
times.reduce((acc, x) => {
    answer += acc + x;
    return acc + x;
});
