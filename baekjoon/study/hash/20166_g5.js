const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n');
const [row, col] = input[0].trim().split(' ').map(n => Number(n));
const map = input.slice(1, row + 1).map(line => line.trim().split(''));
const testCases = input.slice(row + 1);
const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const dx = [ -1, -1, -1, 0, 0, 1, 1, 1 ];
const dy = [ -1, 0, 1, -1, 1, -1, 0, 1 ];
const hash = {};
for (const alphabet of alphabets) {
    hash[alphabet] = new Array();
}
for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        hash[map[i][j]].push([i, j]);
    }
}

answer = '';
for (const testCase of testCases) {
    answer += `${solve(testCase)}\n`;
}
console.log(answer)

function solve(testCase) {
    let posArr = hash[testCase[0]];
    for (let i = 1; i < testCase.length; i++) {
        posArr = find(testCase[i], posArr);
        if (!posArr.length) return 0;
    }
    return posArr.length;
}

function find(char, posArr) {
    const nextPosArr = [];
    for (const pos of posArr) {
        for (let i = 0; i < 8; i++) {
            const currX = (pos[0] + dx[i] + row) % row;
            const currY = (pos[1] + dy[i] + col) % col;
            if (map[currX][currY] === char) {
                nextPosArr.push([currX, currY]);
            }
        }
    }
    return nextPosArr;
}

