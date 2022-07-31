function solution(absolutes, signs) {
  return absolutes.reduce((acc, n, i) => {
    if (signs[i]) {
      return acc + n;
    }
    return acc - n;
  }, 0);
}
