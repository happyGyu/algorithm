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
const resultMap = Array.from({ length: height }, () => Array.from({ length: width }, () => 1));
const cctvInfos = [];

for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        if (map[i][j] === 0) {
            continue;
        } else if (map[i][j] === 6) {
            //여기 안에 아무것도 안둬도 되나?
            resultMap[i][j] = 0;
        } else {
            resultMap[i][j] = 0;
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

for (const cctvInfo of cctvInfos) {
    for (const cctvDirOption of cctvDirOptions[cctvInfo.type]) {
    }
}

function checkCCTVDir(tempResultMap, pos, directions) {
    directions.forEach((directionNum) => checkOneDir(tempResultMap, pos, directionNum));
}

function checkOneDir(tempResultMap, pos, directionNum) {
    let [y, x] = pos;
    if (directions[directionNum] === "right") {
        x++;
        while (x < width && map[y][x] !== 6) {
            tempResultMap[y][x] = 0;
            x++;
        }
    } else if (directions[directionNum] === "left") {
        x--;
        while (x >= 0 && map[y][x] !== 6) {
            tempResultMap[y][x] = 0;
            x--;
        }
    } else if (directions[directionNum] === "up") {
        y--;
        while (y >= 0 && map[y][x] !== 6) {
            tempResultMap[y][x] = 0;
            y--;
        }
    } else if (directions[directionNum] === "down") {
        y++;
        while (y < height && map[y][x] !== 6) {
            tempResultMap[y][x] = 0;
            y++;
        }
    }
}
