//const [min, max] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(n => Number(n));

//메모리 초과....
const [min, max] = [3, 100000]
const logs = new Array(max + 1).fill(true);

for (let i = 2; i <= max; i++) {
    const     
    nums = nums.filter(n => { return n % i !== 0 || n === i });
}
console.log(nums)

