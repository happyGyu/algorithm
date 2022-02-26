const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n');

//굉장히 오래걸림(1400ms이상)
const lengthDic = {};
for (let i = 1; i <= 50; i++) {
    lengthDic[i] = new Set([]);
}

for (let i = 1; i < input.length; i++) {
    lengthDic[input[i].length].add(input[i]);
}

for (let i = 1; i <= 50; i++) {
    if (lengthDic[i].length === 0) continue;
    const sorted = Array.from(lengthDic[i]).sort();
    sorted.forEach(string => console.log(string));
}

//sort()함수 활용
const set = new Set(input.slice(1));
const result = Array.from(set).sort((a,b) => {
    if (a.length === b.length) {
        return a < b ? -1 : 1;
    }
    return a.length - b.length;
})
console.log(result.join('\n'));