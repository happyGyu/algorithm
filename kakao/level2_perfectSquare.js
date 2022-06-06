function solution(w, h) {
  const GCD = getGCD(w, h);
  const [unitW, unitH] = [w / GCD, h / GCD];
  const cutted = GCD * (unitW + unitH - 1);
  const answer = w * h - cutted;
  return answer;
}

function getGCD(w, h) {
  let small = Math.min(w, h);
  const large = Math.max(w, h);

  let CD = small;
  while (CD > 1) {
    if (small % CD === 0 && large % CD === 0) {
      return CD;
    }
    CD--;
  }
  return 1;
}
