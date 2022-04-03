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
const points = input.slice(1).sort((a, b) => a[0] - b[0]);
let minArr = [];
let maxArr = [];
for (const point of points) {
    const [tempMin, tempMax] = point;
    if (tempMin <= maxArr[maxArr.length - 1]) {
        const orginalMax = maxArr.pop();
        maxArr.push(Math.max(orginalMax, tempMax));
    } else {
        minArr.push(tempMin);
        maxArr.push(tempMax);
    }
}
let answer = 0;
for (let i = 0; i < minArr.length; i++) {
    answer += maxArr[i] - minArr[i];
}
console.log(answer);

//위 풀이는 정렬 후 그리디하게 판단. 반복문을 여러번 돌아야해서 굉장히 오래걸림
//백준 통과는했지만 2888ms걸림.
