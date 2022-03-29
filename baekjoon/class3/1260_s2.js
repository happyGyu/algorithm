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

const [pointNum, lineNum, startPoint] = input[0];
const infos = input.slice(1);
const connectionInfo = new Array(pointNum + 1).fill().map(() => new Array());

for (const info of infos) {
    connectionInfo[info[0]].push(info[1]);
    connectionInfo[info[1]].push(info[0]);
}

const dfsVisited = new Array(pointNum + 1).fill(false);
const dfsStack = [startPoint];
let dfsAnswer = "";
while (dfsStack.length !== 0) {
    const curr = dfsStack.pop();
    if (!dfsVisited[curr]) {
        dfsVisited[curr] = true;
        dfsAnswer += `${curr} `;
    }
    const connectedPoints = connectionInfo[curr];
    connectedPoints
        .sort((a, b) => b - a)
        .forEach((p) => {
            if (!dfsVisited[p]) {
                dfsStack.push(p);
            }
        });
}
console.log(dfsAnswer);

const bfsVisited = new Array(pointNum + 1).fill(false);
const bfsQueue = [startPoint];
bfsVisited[startPoint] = true;
let bfsAnswer = "";
while (bfsQueue.length !== 0) {
    const curr = bfsQueue.shift();
    bfsAnswer += `${curr} `;
    const connectedPoints = connectionInfo[curr];
    connectedPoints
        .sort((a, b) => a - b)
        .forEach((p) => {
            if (!bfsVisited[p]) {
                bfsQueue.push(p);
                bfsVisited[p] = true;
            }
        });
}
console.log(bfsAnswer);
