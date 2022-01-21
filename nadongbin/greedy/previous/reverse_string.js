//백준 1439번

const string = require('fs').readFileSync('/dev/stdin').toString().trim();

let count = 0;
let prev = string[0];
for (let i = 1; i < string.length; i++) {
    if (string[i] !== prev) count++;
    prev = string[i];
}
const answer = (count % 2 === 0)? count/2 : (count + 1)/2;
console.log(answer);