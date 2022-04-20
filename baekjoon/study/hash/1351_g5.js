const [n, p, q] = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split(" ")
  .map((n) => Number(n));

const hash = {};
function calA(n) {
  if (n === 0) {
    return 1;
  }
  if (hash[n]) {
    return hash[n];
  }
  const left = Math.floor(n / p);
  const right = Math.floor(n / q);
  const result = calA(left) + calA(right);
  hash[n] = result;
  return result;
}

console.log(calA(n));

// (132ms)오히려 left rigth 같은지 판별해주고 하는게 더 오래걸림. hash가 되어있기 떄문에 비교없이 그냥 구하는게 이득.

// const hash = {};
// function calA(n) {
//   if (n === 0) {
//     return 1;
//   }
//   if (hash[n]) {
//     return hash[n];
//   }
//   const left = Math.floor(n / p);
//   const right = Math.floor(n / q);
//   if (left === right) {
//     const result = 2 * calA(left);
//     hash[n] = result;
//     return result;
//   } else {
//     const result = calA(left) + calA(right);
//     hash[n] = result;
//     return result;
//   }
// }

// console.log(calA(n));

// 재귀만 사용하면 시간초과로 통과 못함.

// function calA(n) {
//     if (n === 0) {
//       return 1;
//     }
//     const left = Math.floor(n / p);
//     const right = Math.floor(n / q);
//     if (left === right) {
//       return 2 * calA(left);
//     } else {
//       return calA(left) + calA(right);
//     }
//   }

//   console.log(calA(n));
