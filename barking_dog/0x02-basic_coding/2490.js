const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const bin = input.map(n => n.trim().split(' ').map(n => parseInt(n)));
const result = ['E','A','B','C','D'];
for (let i = 0; i < bin.length; i++) {
    const zeroCnt = bin[i].filter(n => n === 0).length;
    console.log(result[zeroCnt]);
}