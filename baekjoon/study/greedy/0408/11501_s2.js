const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i < input.length; i += 2) {
    const priceInfo = input[i + 1].trim().split(' ').map(n => Number(n));
    solve(priceInfo);
} 

function solve(priceInfo) {
    let answer = 0;
    let max = 0;
    for (let i = priceInfo.length - 1; i >= 0; i--) {
        if (priceInfo[i] <= max) {
            answer += (max - priceInfo[i]);
        } else {
            max = priceInfo[i];
        }
    }
    console.log(answer);
}
