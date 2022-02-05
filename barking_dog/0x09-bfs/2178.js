const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(n => Number(n));
const map = input.slice(1).map(e => e.split(''));
const queue = [];
//크기에 맞는 빈 배열 만드는 더 좋은 방법이 없을까..?
const distMap = new Array(n).fill().map(e => new Array(m).fill());
const dx = [1,0,-1,0];
const dy = [0,1,0,-1];

queue.push([0,0]);
distMap[0][0] = 0;
while (queue.length !== 0) {
    const ref = queue.shift();
    const refDist = distMap[ref[0]][ref[1]];
    for (let dir = 0; dir < 4; dir++) {
        const currX = ref[0] + dx[dir];
        const currY = ref[1] + dy[dir];
        if (currX < 0 || currX >= n || currY < 0 || currY >= m) continue;
        if (map[currX][currY] === '1' && distMap[currX][currY] === undefined) {
            queue.push([currX, currY]);
            distMap[currX][currY] = refDist + 1;
        }  
    }
}
console.log(distMap[n - 1][m - 1] + 1);