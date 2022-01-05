// const inputLines = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// const count = parseInt(inputLines[0]);

// for (let i = 0; i < count; i++) {
//     const [a, b] = inputLines[i+1].split(' ').map(n => parseInt(n));
//     console.log(getAnswer(a, b))
// }

function getAnswer(a, b) {
    let repeating = [];
    let currDigit = 1;
    for (let i = 0; i < b; i++) {
        currDigit = currDigit*a % 10;
        if (repeating[0] === currDigit) break;
        else repeating.push(currDigit);
    }
    const answerIdx = (b - 1) % repeating.length;
    const answer = repeating[answerIdx] === 0? 10 : repeating[answerIdx]
    return answer;
}
console.log(getAnswer(2,56))