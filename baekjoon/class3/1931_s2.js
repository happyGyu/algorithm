const input = require("fs")
    .readFileSync("./test.txt")
    .toString()
    .trim()
    .split("\n")
    .map((line) =>
        line
            .trim()
            .split(" ")
            .map((n) => Number(n))
    );
const timeInfo = input.slice(1);
const startTimeDic = [];

for (const info of timeInfo) {
    const [start, end] = info;
    if (startTimeDic[end]) startTimeDic[end].push(start);
    else startTimeDic[end] = [start];
}

let answer = 0;
let prevEnd = 0;
for (let i = 0; i < startTimeDic.length; i++) {
    if (startTimeDic[i]) {
        const nextStartTime = startTimeDic[i].filter((startTime) => startTime >= prevEnd && startTime !== i);
        const specialCase = startTimeDic[i].filter((startTime) => startTime === i);
        if (specialCase.length !== 0) {
            answer += specialCase.length;
            prevEnd = i;
            console.log(specialCase);
        }
        if (nextStartTime.length !== 0) {
            answer++;
            prevEnd = i;
        }
    }
}
console.log(answer);
