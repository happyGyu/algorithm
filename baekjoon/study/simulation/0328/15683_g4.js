const input = require("fs")
    .readFileSync("./test.txt")
    .toString()
    .trim()
    .split("\n")
    .map((line) =>
        line
            .trim()
            .split(" ")
            .map((n) => Number(n))
    );
const [height, width] = input[0];
const map = input.slice(1);

const wallAndCCTVs = [];
const cctvInfos = [];
for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        if (map[i][j] === 0) {
            continue;
        } else if (map[i][j] === 6) {
            wallAndCCTVs.push([i,j]);
        } else {
            wallAndCCTVs.push([i,j]);
            const cctvInfo = { type: map[i][j], pos: [i, j] };
            cctvInfos.push(cctvInfo);
        }
    }
}

const directions = ["up", "right", "down", "left"];
const cctvDirOptions = {
    1: [[0], [1], [2], [3]],
    2: [
        [0, 2],
        [1, 3],
    ],
    3: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
    ],
    4: [
        [0, 1, 2],
        [1, 2, 3],
        [2, 3, 0],
        [3, 0, 1],
    ],
    5: [[0, 1, 2, 3]],
};

let answer = 0;
const totalCaseNum = cctvInfos.length > 0 ? 4 ** cctvInfos.length : 0;
if (totalCaseNum === 0) {
    answer = wallAndCCTVs.length;
}
for (let i = 0; i < totalCaseNum; i++) {
    const watchedSet = new Set();
    const testCase = i.toString(4).padStart(cctvInfos.length, '0');
    for (let j = 0; j < testCase.length; j++) {
        const cctv = cctvInfos[j]; 
        const directions = cctvDirOptions[cctv.type][testCase[j]];
        if (directions === undefined) break; 
        checkCCTVDir(watchedSet, cctv.pos, directions);
    }
    wallAndCCTVs.forEach(posArr => watchedSet.add(posArr.toString()))
    answer = Math.max(watchedSet.size, answer);
}
console.log(width * height - answer)



function checkCCTVDir(watchedSet, pos, directions) {
    directions.forEach((directionNum) => checkOneDir(watchedSet, pos, directionNum));
}

function checkOneDir(watchedSet, pos, directionNum) {
    let [y, x] = pos;
    if (directions[directionNum] === "right") {
        x++;
        while (x < width && map[y][x] !== 6) {
            watchedSet.add([y,x].toString());
            x++;
        }
    } else if (directions[directionNum] === "left") {
        x--;
        while (x >= 0 && map[y][x] !== 6) {
            watchedSet.add([y,x].toString());
            x--;
        }
    } else if (directions[directionNum] === "up") {
        y--;
        while (y >= 0 && map[y][x] !== 6) {
            watchedSet.add([y,x].toString());
            y--;
        }
    } else if (directions[directionNum] === "down") {
        y++;
        while (y < height && map[y][x] !== 6) {
            watchedSet.add([y,x].toString());
            y++;
        }
    }
}
