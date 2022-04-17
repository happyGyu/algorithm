const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n');
const [pokemonCnt, questionCnt] = input[0].trim().split(' ').map(n => Number(n));

const pokemonDic = {};
const pokemonArr = [0];

for (let i = 1; i <= pokemonCnt; i++) {
    pokemonDic[input[i]] = i;
    pokemonArr.push(input[i]);
}

let answer = '';
for (let i = pokemonCnt + 1; i < input.length; i++) {
    if (isNaN(input[i])) {
        answer += `${pokemonDic[input[i]]}\n`;
    } else {
        answer += `${pokemonArr[input[i]]}\n`;
    }
}
console.log(answer);