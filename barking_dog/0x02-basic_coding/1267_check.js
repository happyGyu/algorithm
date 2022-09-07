const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const count = parseInt(input[0]);
const timeArr = input[1].trim().split(' ').map(n => parseInt(n));
let young = 0;
let min = 0;
// 처음에 그냥 let young; 으로 선언했는데 이러면 undefined에 숫자를 더하는 꼴이 되어서 틀림! 조심하도록!

for (let i = 0; i < timeArr.length; i++) {
    young += (Math.floor(timeArr[i] / 30) + 1) * 10;
    min += (Math.floor(timeArr[i] / 60) + 1) * 15;
}
// 문제 조건을 잘 읽자! 내 고정관념대로 하면 쉬운 문제여도 틀려!g

if (young > min) console.log(`M ${min}`);
else if (young < min) console.log(`Y ${young}`);
else console.log(`Y M ${young}`);