const [count, input] = require('fs').readFileSync('./2943_input.txt').toString().trim().split('\n');
const towers = input.split(' ').map(n => parseInt(n));
let max = towers.pop();
let cnt = 1;
answer = '';

while (towers.length !== 0) {
    const curr = towers.pop();
    if (curr < max) {
        cnt++;
    } else {
        max = curr;
        answer = `${towers.length + 1} `.repeat(cnt) + answer;
        cnt = 1;
    }
}
answer = '0 '.repeat(cnt) + answer;
console.log(answer.trim());