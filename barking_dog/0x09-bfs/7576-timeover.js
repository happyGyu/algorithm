const input = require('fs').readFileSync('./7576.txt').toString().trim().split('\n');
const [m,n] = input.shift().split(' ').map(n => Number(n));
const box = input.map(line => line.split(' '));
const queue = [];
const dx = [1,0,-1,0];
const dy = [0,1,0,-1];
let max = 1;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (box[i][j] === '1') {
            queue.push([i,j]);
        }
    }
}

while (queue.length !== 0) {
    const ref = queue.shift();
    for (let dir = 0; dir < 4; dir++) {
        const currX = ref[0] + dx[dir];
        const currY = ref[1] + dy[dir];
        if (currX < 0 || currX >= n || currY < 0 || currY >= m) continue;
        if (box[currX][currY] === '0') {
            box[currX][currY] = Number(box[ref[0]][ref[1]]) + 1;
            queue.push([currX,currY]);
            max = (box[currX][currY] > max)? box[currX][currY]:max;
        }
    }
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (box[i][j] === '0') {
            console.log(-1);
            return;
        }
    }
}
console.log(max - 1);