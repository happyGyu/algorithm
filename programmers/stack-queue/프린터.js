function solution(priorities, location) {
  const sortedNums = priorities.slice().sort((a, b) => a - b);
  const indexMarkedArr = priorities.map((n, i) => [n, i]);
  let cnt = 0;
  while (true) {
    const curr = indexMarkedArr.shift();
    if (sortedNums[sortedNums.length - 1] === curr[0]) {
      sortedNums.pop();
      cnt++;
      if (curr[1] === location) {
        return cnt;
      }
    } else {
      indexMarkedArr.push(curr);
    }
  }
}

//Array에 some이라는 메서드가 있었음!
function solution(priorities, location) {
  const indexMarkedArr = priorities.map((n, i) => [n, i]);
  let cnt = 0;
  while (true) {
    const curr = indexMarkedArr.shift();
    if (indexMarkedArr.some((n) => n[0] > curr[0])) {
      indexMarkedArr.push(curr);
    } else {
      cnt++;
      if (curr[1] === location) {
        return cnt;
      }
    }
  }
}
