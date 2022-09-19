//18352
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M, K, start] = input[0].split(" ").map((n) => Number(n));
const linkInfos = input.slice(1);

const linkMap = {};
for (const linkInfo of linkInfos) {
  const [from, to] = linkInfo.split(" ").map((n) => +n);
  if (!linkMap[from]) {
    linkMap[from] = [];
  }
  linkMap[from].push(to);
}

const answer = [];
const visited = new Array(N + 1).fill(false);
const queue = [start];
visited[start] = 0;

while (queue.length) {
  const current = queue.shift();
  const length = visited[current];
  if (length > K) break;
  if (length === K) {
    answer.push(current);
  }
  if (!linkMap[current]) continue;
  linkMap[current].forEach((city) => {
    if (visited[city] === false) {
      queue.push(city);
      visited[city] = length + 1;
    }
  });
}

if (answer.length) {
  answer.sort((a, b) => a - b).forEach((n) => console.log(n));
} else {
  console.log();
}

console.log(answer.length ? answer.sort((a, b) => a - b).join("\n") : -1);
