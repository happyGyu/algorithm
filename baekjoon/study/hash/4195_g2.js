const input = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");
const testCaseNum = input[0];
const testCases = [];

let pointer = 1;
for (let i = 0; i < testCaseNum; i++) {
  const next = pointer + Number(input[pointer]) + 1;
  const testCase = input.slice(pointer + 1, next);
  testCases.push(testCase);
  pointer = next;
}

let answer = "";
for (const testCase of testCases) {
  solve(testCase);
}
console.log(answer);

function solve(testCase) {
  let idx = 1;
  const groups = {};
  const nameGroupDic = {};
  for (const nameGroup of testCase) {
    const [name1, name2] = nameGroup.split(" ");
    if (!nameGroupDic[name1] && !nameGroupDic[name2]) {
      groups[idx] = new Set([name1, name2]);
      nameGroupDic[name1] = idx;
      nameGroupDic[name2] = idx;
      idx++;
      answer += `2\n`;
    } else if (nameGroupDic[name1] && nameGroupDic[name2]) {
      const leftTopSetNum = getTopSetNum(nameGroupDic[name1], groups);
      const rightTopSetNum = getTopSetNum(nameGroupDic[name2], groups);
      groups[leftTopSetNum] = new Set([
        ...groups[leftTopSetNum],
        ...groups[rightTopSetNum],
      ]);
      groups[rightTopSetNum] = leftTopSetNum;
      nameGroupDic[name2] = leftTopSetNum;
      groups[name2] = leftTopSetNum;
      answer += `${groups[leftTopSetNum].size}\n`;
    } else if (nameGroupDic[name1] && !nameGroupDic[name2]) {
      const [alreadyHadGroupName, noGroup] = nameGroupDic[name1]
        ? [name1, name2]
        : [name2, name1];
      const topSetNum = getTopSetNum(nameGroupDic[alreadyHadGroupName], groups);
      groups[topSetNum].add(noGroup);
      nameGroupDic[noGroup] = topSetNum;
      answer += `${groups[topSetNum].size}\n`;
    }
  }
}

function getTopSetNum(groupNum, groups) {
  while (true) {
    const curr = groups[groupNum];
    if (isNaN(curr)) {
      return groupNum;
    } else {
      groupNum = curr;
    }
  }
}
