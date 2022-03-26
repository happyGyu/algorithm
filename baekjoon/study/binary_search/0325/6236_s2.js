const input = require("fs").readFileSync("./test.txt").toString().trim().split("\n");
const [days, maxCnt] = input[0]
    .trim()
    .split(" ")
    .map((n) => Number(n));
const plans = input.slice(1).map((n) => Number(n));
let max = plans.reduce((acc, n) => acc + n);
let min = max / maxCnt;

let answer;
while (min < max) {
    answer = Math.floor((min + max) / 2);
    if (test(answer)) {
        max = answer;
    } else {
        min = answer + 1;
    }
}
console.log(min);

function test(money) {
    let budget = 0;
    let cnt = 0;
    for (const plan of plans) {
        if (money < plan) return false;
        if (budget - plan < 0) {
            budget = money - plan;
            cnt++;
        } else {
            budget -= plan;
        }
        if (cnt > maxCnt) return false;
    }
    return true;
}
