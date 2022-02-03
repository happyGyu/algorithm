const lines = require('fs').readFileSync('./4949.txt').toString().trim().split('\n');
let answerTxt = '';

for (let line of lines) {
    if (line === '.') break;
    const stack = [];
    let flag = true;
    for (let i = 0; i < line.length; i++) {
        if (['(', '[' ].includes(line[i])) {
            stack.push(line[i]);
        } else if ([')', ']' ].includes(line[i])) {
            const latest = stack.pop();
            if ((latest === '(' && line[i] === ')') || (latest === '[' && line[i] === ']')) {
                continue;
            } else {
                answerTxt += 'no\n';
                flag = false;
                break;
            }
        }
    }
    if (flag) {
        if (stack.length === 0) answerTxt += 'yes\n';
        else answerTxt += 'no\n';
    }
}
console.log(answerTxt);