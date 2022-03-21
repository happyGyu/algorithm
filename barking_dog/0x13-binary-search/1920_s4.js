const input = require("fs").readFileSync("./test.txt").toString().trim().split("\n");
const testCases = input[3]
  .trim()
  .split(" ")
  .map((n) => Number(n));

//key-value를 이용한 풀이.
//오브젝트 만드는 데 O(N) + 테스트 케이스 답 찾는데 O(M) ==> O(N+M) 무난히 통과
const list = input[1].trim().split(" ");
const dic = {};
list.forEach((n) => (dic[n] = true));

let answer = "";
for (let testCase of testCases) {
  if (dic[testCase]) answer += "1\n";
  else answer += "0\n";
}
console.log(answer);

//이분탐색을 이용한 풀이
//input list를 정렬하는데 O(NlogN) + 답 찾는데 O(MlogN) --> 위에 풀이보다 오래걸림 --> 근데 백준 계산 시간은 얘가 더 빠름!
const list = input[1]
  .trim()
  .split(" ")
  .map((n) => Number(n))
  .sort((a, b) => a - b);
let answer = "";
for (let testCase of testCases) {
  let start = 0;
  let end = list.length - 1;
  let find = false;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (list[mid] === testCase) {
      find = true;
      break;
    } else if (list[mid] < testCase) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  answer += find ? "1\n" : "0\n";
}
console.log(answer);
