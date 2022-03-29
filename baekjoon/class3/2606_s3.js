const input = require("fs").readFileSync("./test.txt").toString().trim().split("\n");
const computerNum = Number(input[0]);
const connectionInfo = input.slice(2).map((line) =>
    line
        .trim()
        .split(" ")
        .map((n) => Number(n))
);
const connectionDic = new Array(computerNum + 1).fill().map(() => new Array());

for (const info of connectionInfo) {
    connectionDic[info[0]].push(info[1]);
    connectionDic[info[1]].push(info[0]);
}

const dfsStack = [1];
const visited = new Array(computerNum + 1).fill(false);
let answer = 0;
while (dfsStack.length !== 0) {
    const curr = dfsStack.pop();
    if (!visited[curr]) {
        answer++;
        visited[curr] = true;
    }
    connectionDic[curr].forEach((com) => {
        if (!visited[com]) {
            dfsStack.push(com);
        }
    });
}
console.log(answer - 1);
