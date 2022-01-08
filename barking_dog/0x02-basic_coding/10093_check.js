const [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(n => parseInt(n));
const [large, small] = a > b? [a, b] : [b, a]
let arr = [];
for (let i = 1; i < large - small; i++) {
    arr.push(small + i);
}
console.log(arr.length);
console.log(arr.join(' '));

//문제 조건을 잘 읽자!!! 예제만 보고 a가 b보다 작을거라고 생각하면 안돼!