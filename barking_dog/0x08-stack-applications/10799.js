const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const replaced = input.replaceAll('()','*');
const stack = [];
let answer = 0;
for (let i = 0; i < replaced.length; i++) {
    switch (replaced[i]) {
        case '(':
            stack.push(replaced[i]);
            break;
        case '*':
            answer += stack.length;
            break;
        case ')':
            stack.pop();
            answer += 1;
    }
}
answer += stack.length;
console.log(answer);