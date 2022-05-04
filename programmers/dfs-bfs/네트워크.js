function solution(n, computers) {
  let answer = 0;
  const visited = new Set();
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      visited.add(i);
      let stack = [i];
      while (stack.length) {
        const curr = stack.pop();
        computers[curr].forEach((n, k) => {
          if (n === 1 && !visited.has(k)) {
            visited.add(k);
            stack.push(k);
          }
        });
      }
      answer++;
    }
  }
  return answer;
}
