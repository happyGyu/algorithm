//10825
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const scoreInfos = input.slice(1).map((line) => line.trim().split(" "));
scoreInfos.sort((a, b) => {
  const [aName, aKorean, aEnglish, aMath] = a;
  const [bName, bKorean, bEnglish, bMath] = b;
  if (aKorean !== bKorean) {
    return bKorean - aKorean;
  }
  if (aEnglish !== bEnglish) {
    return aEnglish - bEnglish;
  }
  if (aMath !== bMath) {
    return bMath - aMath;
  }
  return aName < bName ? -1 : 1;
});
console.log(scoreInfos.map((scoreInfo) => scoreInfo[0]).join("\n"));
