// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(n => n.split('').reverse());
const input = ['0', '0']
const [a, b] = input.map(n => n.split('').reverse());

const [long, short] = (a.length >= b.length)? [a, b] : [b. a];

let answer = [];
let carry = 0;
for (let i = 0; i < long.length; i++) {
    const fullAdded = fullAdder(parseInt(long[i]), parseInt(short[i] ?? 0), carry);
    answer.push(fullAdded[0]);
    carry = fullAdded[1];        
}
if (carry === 1) answer.push(carry);                        
console.log(answer.reverse().join(''));

function fullAdder(dec1, dec2, carryIn) {
    const sum = (dec1 + dec2 + carryIn) % 10;
    const carryOut = Math.floor((dec1 + dec2 + carryIn)/10);
    return [sum, carryOut]
}