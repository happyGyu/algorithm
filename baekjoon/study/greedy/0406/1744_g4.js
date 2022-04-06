const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n').map(n => Number(n));
const sortedNums = input.slice(1).sort((a, b) => a - b);
let plusNums = [];
let minusNums = [];
for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] > 0) {
        minusNums = sortedNums.slice(0, i);
        plusNums = sortedNums.slice(i);
        break;
    }
    minusNums = sortedNums;
}

let answer = 0;
while (minusNums?.length >= 2) {
    answer += minusNums.shift() * minusNums.shift();
}
answer += minusNums[0] || 0;

const filteredPlusNums = plusNums.filter(n => {
    if (n === 1) {
        answer++;
        return false;
    }
    return true;
})

while (filteredPlusNums?.length >= 2) {
    answer += filteredPlusNums.pop() * filteredPlusNums.pop();
}
answer += filteredPlusNums[0] || 0;

console.log(answer);

