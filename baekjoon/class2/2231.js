const sum = require('fs').readFileSync('/dev/stdin').toString();
//const sum = '216';
const maxDiff = sum.length * 9;

function solution() {
    for (let i = maxDiff; i >= 1 ; i--) {
        const temp = Number(sum) - i;
        const adder = String(temp).split('').map(n => Number(n)).reduce(( acc, n )=> acc + n);
        if ((temp + adder) === Number(sum)) return temp;
    }
    return 0;
}

console.log(solution());

