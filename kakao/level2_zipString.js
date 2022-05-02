function solution(s) {
  let max = 0;
  for (let i = 1; i <= s.length / 2; i++) {
    const curr = zip(s, i);
    max = curr > max ? curr : max;
  }
  return s.length - max;
}

function zip(s, unit) {
  let prev = "";
  let cnt = 0;
  let zipCnt = 0;
  for (let i = 0; i < s.length; i += unit) {
    const curr = s.slice(i, i + unit);
    if (prev === curr) {
      cnt++;
    } else {
      if (cnt > 0) {
        const cntLength = String(cnt + 1).length;
        zipCnt += cnt * unit - cntLength;
      }
      cnt = 0;
      prev = curr;
    }
  }
  if (cnt > 0) {
    const cntLength = String(cnt + 1).length;
    zipCnt += cnt * unit - cntLength;
  }
  return zipCnt;
}
