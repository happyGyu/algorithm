const string = require('fs').readFileSync('./test.txt').toString().trim();

let answer = '';
for (let i = 0; i < string.length; i++) {
    if (string[i] === '<') {
        const stack = [];
        while (string[i] !== '>') {
            stack.push(string[i]);
            i++;
        }
        answer += stack.join('') + '>';
    } else {
        const stack = [];
        while (true) {
            stack.push(string[i]);
            if (string[i + 1] === '<' || string[i + 1] === undefined) break;
            i++;
        }
        answer += stack.reverse().join('').split(' ').reverse().join(' ');
    }
}
console.log(answer);