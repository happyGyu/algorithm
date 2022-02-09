const [a,b,c] = require('fs').readFileSync('./test.txt').toString().trim().split(' ').map(n => BigInt(n));

const bin = b.toString(2);
let value = a % c;
for (let i = 1; i < bin.length; i++) {
    value = (value * value) % c;
    if (bin[i] === '1') value = (value * a) % c;
}
console.log(value.toString());
