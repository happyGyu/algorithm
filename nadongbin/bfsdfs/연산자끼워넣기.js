const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const N = +input[0];
const numbers = input[1]
  .trim()
  .split(" ")
  .map((n) => +n);
const signCnts = input[2]
  .trim()
  .split(" ")
  .map((n) => +n);

let max = -Infinity;
let min = Infinity;
function solution(index, result, currentSignCnts) {
  if (index >= N - 1) {
    max = Math.max(result, max);
    min = Math.min(result, min);
  }
  for (let i = 0; i < 4; i++) {
    if (currentSignCnts[i] > 0) {
      const newResult = calcutate(result, numbers[index + 1], i);
      const newSignCnts = [...currentSignCnts];
      newSignCnts[i]--;
      solution(index + 1, newResult, newSignCnts);
    }
  }
}

function calcutate(acc, number, signIndex) {
  switch (signIndex) {
    case 0:
      return acc + number;
    case 1:
      return acc - number;
    case 2:
      return acc * number;
    case 3:
      const result = acc / number;
      return result > 0 ? Math.floor(result) : Math.ceil(result);
  }
}

solution(0, numbers[0], signCnts);
console.log(max ? max : 0);
console.log(min ? min : 0);

// //가능한 모든 경우의 수를 순열로 구하여 해결시도. 중복되는 케이스는 별도록 처리하지 않음. 메모리초과.
// const signArr = [];

// for (let i = 0; i < 4; i++) {
//   const signs = ["+", "-", "x", "/"];
//   const currentSigns = new Array(signCnts[i]).fill(signs[i]);
//   signArr.push(...currentSigns);
// }
// const signCases = getPermutations(signArr, signArr.length);

// let max;
// let min;
// for (const signCase of signCases) {
//   const currentResult = numbers.reduce((acc, n, i) => {
//     if (i === 0) return acc + n;
//     const currentSign = signCase[i - 1];
//     switch (currentSign) {
//       case "+":
//         return acc + n;
//       case "-":
//         return acc - n;
//       case "x":
//         return acc * n;
//       case "/":
//         const result = acc / n;
//         return result > 0 ? Math.floor(result) : Math.ceil(result);
//     }
//   }, 0);
//   if (currentResult > max || max === undefined) {
//     max = currentResult;
//   }
//   if (currentResult < min || min === undefined) {
//     min = currentResult;
//   }
// }
// console.log(max);
// console.log(min);

// function getPermutations(arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map((el) => [el]);
//   arr.forEach((fixed, index, origin) => {
//     const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//     const permutations = getPermutations(rest, selectNumber - 1);
//     const attached = permutations.map((el) => [fixed, ...el]);
//     results.push(...attached);
//   });

//   return results;
// }
