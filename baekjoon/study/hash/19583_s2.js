const input = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n");
const [startTime, endTime, checkoutTime] = input[0]
  .split(" ")
  .map((timeStr) => convertTime(timeStr));

function convertTime(str) {
  const [hour, minute] = str.split(":");
  return Number(hour) * 60 + Number(minute);
}

const hash = {};
const set = new Set();
for (let i = 1; i < input.length; i++) {
  const [timeStr, name] = input[i].split(" ");
  if (convertTime(timeStr) <= startTime) {
    hash[name] = true;
  } else if (
    convertTime(timeStr) >= endTime &&
    convertTime(timeStr) <= checkoutTime &&
    hash[name]
  ) {
    set.add(name);
  }
}
console.log(set.size);
