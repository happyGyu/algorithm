const input = require('fs').readFileSync('./15683-input.txt').toString().trim().split('\n');
const [h,w] = input.shift().split(' ').map(n => Number(n));
const map = input.map(line => line.split(' ').map(n => Number(n)));
const wallIndex = []
const cctvs = []

for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
        if (map[i][j] === 0) continue;
        else if (map[i][j] === 6) wallIndex.push([i,j]);
        else cctvs.push({'type':  map[i][j], 'position': [i,j], 'direction': 0});
    }
}

function next {
    
}