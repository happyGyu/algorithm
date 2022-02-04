const input = require('fs').readFileSync('./1926.txt').toString().trim().split('\n');
const [maxX, maxY] = input[0].split(' ').map(n => Number(n));
const map = input.slice(1).map(e => e.trim().split(' ').map(n => Number(n)));
let maxArea = 0;
let count = 0;
const dx = [1,0,-1,0];
const dy = [0,1,0,-1];

for (let i = 0; i < maxX; i++) {
    for (let j = 0; j < maxY; j++) {
        if (map[i][j] === 1) {
            const area = calArea([i,j], map);
            maxArea = area > maxArea ? area:maxArea;
            count++;
        }
    }
}
console.log(count);
console.log(maxArea);

function calArea(s, map) {
    let area = 0;
    const queue = [];
    queue.push(s);
    map[s[0]][s[1]] = 0;
    while (queue.length !== 0) {
        const ref = queue.shift();
        area++;
        for (let dir = 0; dir < 4; dir++) {
            const currX = ref[0] + dx[dir];
            const currY = ref[1] + dy[dir];
            if (currX < 0 || currX >= maxX || currY < 0 || currY >= maxY) continue;
            if (map[currX][currY] === 1) {
                queue.push([currX, currY]);
                map[currX][currY] = 0;
            }
        }
    }
    return area;
}