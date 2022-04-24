const input = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim().split(" "));
const nodeNum = Number(input[0][0]);
const connectionInfo = {};

for (let i = 1; i <= nodeNum; i++) {
  connectionInfo[i] = new Array();
}

for (let i = 1; i < input.length; i++) {
  const currInfo = input[i];
  connectionInfo[currInfo[0]].push(currInfo[1]);
  connectionInfo[currInfo[1]].push(currInfo[0]);
}

const answer = [];
function checkParentNode(parent, self, sonNodes) {
  for (const son of sonNodes) {
    if (son !== parent) {
      answer[son] = self;
      checkParentNode(self, son, connectionInfo[son]);
    }
  }
}
checkParentNode(null, "1", connectionInfo["1"]);
console.log(answer.slice(2).join("\n"));
