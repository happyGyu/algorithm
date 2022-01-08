const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => parseInt(n));
const odds = input.filter(n => n % 2 === 1);
if (odds.length === 0) {
    console.log(-1);
} else {
    let min = odds[0];
    const sum = odds.reduce((acc, num) => {
        if (num < min) {
            min = num;
        }
        return acc + num;
    });
    console.log(sum);
    console.log(min);
}
