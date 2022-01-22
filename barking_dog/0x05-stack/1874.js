const input = require('fs').readFileSync('./test3.txt').toString().trim().split('\n').map(n => parseInt(n));
const source = new Array(input[0]).fill(0).map((n,i) => input[0] - i);
const stack = [];
let max = 0;
let answer = [];
for (let i = 1; i < input.length; i++) {
    if (input[i] > max) {
        for (let j = 0; j < (input[i] - max); j++) {
            stack.push(source.pop());
            answer.push('+');
        }
        max = input[i];
        stack.pop();
        answer.push('-');
    } else {
        const curr = stack.pop();
        if (curr !== input[i]) {
            answer = ['NO'];
            break;
        }
        answer.push('-');
    }
}
const answerString = answer.join('\n');
console.log(answerString);
