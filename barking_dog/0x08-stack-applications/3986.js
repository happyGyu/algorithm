const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = 0;
for (let i = 1; i < input.length; i++) {
    if (isGood(input[i])) answer++;
}
console.log(answer);

function isGood(string) {
    const stack = [];
    for (let i = 0; i < string.length; i++) {
        if (stack[stack.length - 1] === string[i]) {
            stack.pop();
        } else {
            stack.push(string[i]);
        }
    }
    return (stack.length === 0);
}