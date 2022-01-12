const [n, input, x] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const nums = input.split(' ').map(n => parseInt(n));
const numList = {};
nums.forEach(n => numList[n] = 1);
let answer = 0;
nums.forEach(n => {
   if (n * 2 !== Number(x)) {
       try {
           if (numList[x - n] === 1) answer++;  
       } catch{}   
   }
});
console.log(answer / 2);