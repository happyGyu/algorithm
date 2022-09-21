const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [length, target] = input[0]
  .trim()
  .split(" ")
  .map((n) => +n);
const nums = input[1]
  .trim()
  .split(" ")
  .map((n) => +n);

function findFirstIndex(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] === target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return nums[start] === target ? start : null;
}

function findLastIndex(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    const mid = Math.ceil((start + end) / 2);
    if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] === target) {
      start = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

const firstIndex = findFirstIndex(nums, target);
if (firstIndex === null) {
  console.log(-1);
  return;
}
const lastIndex = findLastIndex(nums, target);
console.log(lastIndex - firstIndex + 1);
