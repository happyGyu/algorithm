const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n');
const stack = [];
let answer = '';
for (let i = 1; i < input.length; i++) {
    const command = input[i].split(' ');
    switch (command[0]) {
        case 'push':
            stack.push(Number(command[1]));
            break;
        case 'top':
            answer += stack[stack.length - 1] ?? -1;
            answer += '\n';
            break;
        case 'size':
            answer += stack.length;
            answer += '\n';
            break;
        case 'pop':
            answer += stack.pop() ?? -1;
            answer += '\n';
            break;
        case 'empty':
            (stack.length === 0) ? answer += 1 : answer += 0;
            answer += '\n'
            break;
    }
}
console.log(answer);