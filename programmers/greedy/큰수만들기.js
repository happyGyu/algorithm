function solution(number, k) {
  const stack = [number[0]];
  let removedCnt = 0;
  let pointer = 1;
  while (true) {
    if (removedCnt === k) break;
    if (stack.length === number.length - k) break;
    while (stack[stack.length - 1] < number[pointer] && stack.length) {
      if (removedCnt === k) break;
      stack.pop();
      removedCnt++;
    }
    stack.push(number[pointer]);
    pointer++;
  }
  const answer = stack.join("") + number.slice(pointer);
  return answer;
}
