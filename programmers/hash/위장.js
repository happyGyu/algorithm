function solution(clothes) {
  const closet = {};
  for (const cloth of clothes) {
    closet[cloth[1]] = (closet[cloth[1]] || 0) + 1;
  }
  const clothCnts = Object.values(closet);
  const answer = clothCnts.reduce((acc, n) => acc * (n + 1), 1) - 1;
  return answer;
}
