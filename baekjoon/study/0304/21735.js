const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n');

const [len, time] = input[0].trim().split(' ').map(n => Number(n));
const snows = input[1].trim().split(' ').map(n => Number(n));

const caseNum = 2 ** (time);

let score = 0;
for (let i = 0; i < caseNum; i++) {
    const currCase = i.toString(2).padStart(time, '0');
    console.log(currCase)
    let pointer = -1;
    let currScore = 1;
    for (let step of currCase) {
        if (step === '1') {
            pointer += 2;
            if (pointer >= len) break;
            currScore = parseInt(currScore / 2) + snows[pointer];
        } else {
            pointer++;
            if (pointer >= len) break;
            currScore += snows[pointer];
        }
    }
    score = Math.max(currScore, score);
}
console.log(score);
