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
const [lineCnt, fretCnt] = input[0];
const log = new Array(lineCnt + 1).fill().map((n) => new Array());

let answer = 0;
for (let i = 1; i < input.length; i++) {
  const [currLine, currFret] = input[i];
  if (log[currLine].length === 0) {
    log[currLine].push(currFret);
    answer++;
  } else {
    while (log[currLine].length) {
      const loggedFret = log[currLine].pop();
      if (loggedFret < currFret) {
        log[currLine].push(loggedFret);
        log[currLine].push(currFret);
        answer++;
        break;
      } else if (loggedFret === currFret) {
        log[currLine].push(currFret);
        break;
      } else {
        answer++;
      }
    }
    if (!log[currLine].length) {
      log[currLine].push(currFret);
      answer++;
    }
  }
}
console.log(answer);
