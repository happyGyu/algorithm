const input = require('fs').readFileSync('./test2.js').toString().split('\n').map(n => parseInt(n));
let numbers = [];
for (let i = 1; i < input.length; i++) {
    if (input[i] === 0) {
        numbers.pop();
    } else {
        numbers.push(input[i]);
    }
}
console.log(numbers.reduce((acc, n) => {return acc + n}, 0));
