function solution(n, arr1, arr2) {
  const map1 = arr1.map((num) => num.toString(2).padStart(n, "0"));
  const map2 = arr2.map((num) => num.toString(2).padStart(n, "0"));
  const answer = [];
  for (let i = 0; i < n; i++) {
    let curr = "";
    for (let j = 0; j < n; j++) {
      curr += map1[i][j] === "1" || map2[i][j] === "1" ? "#" : " ";
    }
    answer.push(curr);
  }
  return answer;
}
