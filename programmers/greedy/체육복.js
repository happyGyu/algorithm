function solution(n, lost, reserve) {
  const lostSet = new Set(lost);
  const sortedReserves = reserve.sort((a, b) => a - b);
  const reserveSet = new Set(sortedReserves);
  for (const r of reserveSet) {
    if (lostSet.has(r)) {
      lostSet.delete(r);
      reserveSet.delete(r);
    }
  }

  for (const r of reserveSet) {
    if (lostSet.has(r - 1)) {
      lostSet.delete(r - 1);
    } else if (lostSet.has(r)) {
      lostSet.delete(r);
    } else if (lostSet.has(r + 1)) {
      lostSet.delete(r + 1);
    }
  }
  const answer = n - lostSet.size;
  return answer;
}
