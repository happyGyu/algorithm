const input = 'AJKDLSI412K4JSJ9D';

function solution(input) {
    const chars = [];
    const nums = [];
    input.split('').forEach(e => {
        if (isNaN(e)) chars.push(e);
        else nums.push(e);
    });
    chars.sort();
    const sum = String(nums.map(n => parseInt(n)).reduce((acc, n) => acc + n));
    return chars.join('') + sum;
}

console.log(solution(input));