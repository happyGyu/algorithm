function solution(queue1, queue2) {
  let total1 = queue1.reduce((acc, n) => acc + n, 0);
  let total2 = queue2.reduce((acc, n) => acc + n, 0);
  const maxCnt = (queue1.length + queue2.length) * 2;
  let index1 = 0;
  let index2 = 0;
  let cnt = 0;
  while (total1 !== total2) {
    if (total1 > total2) {
      const popedNum = queue1[index1];
      total2 += popedNum;
      queue2.push(popedNum);
      total1 -= popedNum;
      index1++;
    } else {
      const popedNum = queue2[index2];
      total1 += popedNum;
      queue1.push(popedNum);
      total2 -= popedNum;
      index2++;
    }
    cnt++;
    if (cnt >= maxCnt) {
      return -1;
    }
  }
  return cnt;
}
