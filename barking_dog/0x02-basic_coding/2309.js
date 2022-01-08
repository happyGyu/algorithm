const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => parseInt(n));
const over = input.reduce((acc, num) => acc + num) - 100;
let answer;

for (let i = 0; i < input.length; i++) {
    const pairIndex = input.indexOf(over - input[i]);
    if (pairIndex !== -1 && pairIndex !== i) {
        answer = input.filter(n => n !== input[i] && n !== input[pairIndex]);
        break;
    }
}
answer.sort((a, b) => a-b);
answer.forEach(n => console.log(n))

// 그냥 전체 콤비네이션 구해서 살펴봐도 될듯.