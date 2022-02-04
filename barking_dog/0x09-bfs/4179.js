const input = require('fs').readFileSync('./4179.txt').toString().trim().split('\n');
const [r,c] = input.shift().split(' ').map(n => Number(n));
const map = input.map(line => line.split(''));
const dx = [1,0,-1,0];
const dy = [0,1,0,-1];
const fMap = new Array(r).fill().map(e => new Array(c).fill());
const jMap = new Array(r).fill().map(e => new Array(c).fill());
const fQueue = [];
const jQueue = [];
let pointer = 0;

for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
        if (map[i][j] === 'J') {
            jQueue.push([i,j]);
            jMap[i][j] = 0;
        } else if(map[i][j] === 'F') {
            fQueue.push([i,j]);
            fMap[i][j] = 0;
        }
    }
}

while (pointer < fQueue.length) {
    const ref = fQueue[pointer];
    pointer++;
    for (let dir = 0; dir < 4; dir++) {
        const currX = ref[0] + dx[dir];
        const currY = ref[1] + dy[dir];
        if (currX < 0 || currX >= r || currY < 0 || currY >= c) continue;
        if (map[currX][currY] !== '#' && fMap[currX][currY] === undefined) {
            fMap[currX][currY] = fMap[ref[0]][ref[1]] + 1;
            fQueue.push([currX, currY]);
        }
    }
}

pointer = 0;
while (pointer < jQueue.length) {
    const ref = jQueue[pointer];
    pointer++;
    for (let dir = 0; dir < 4; dir++) {
        const currX = ref[0] + dx[dir];
        const currY = ref[1] + dy[dir];
        if (currX < 0 || currX >= r || currY < 0 || currY >= c) {
            console.log(jMap[ref[0]][ref[1]] + 1); //범위 밖으로 나갔다는 것은 탈출했다는 의미.
            return;
        }
        if (map[currX][currY] === '.' && jMap[currX][currY] === undefined) {
            const currTime = jMap[ref[0]][ref[1]] + 1; 
            if (currTime < fMap[currX][currY] || fMap[currX][currY] === undefined) { //불이 움직이지 못하는 경우 고려
                jMap[currX][currY] = currTime; 
                jQueue.push([currX, currY]);    
            }
        }
    }
}
console.log('IMPOSSIBLE');

