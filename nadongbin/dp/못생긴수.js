function solve(n) {
  const dp = [1];
  let idx2 = 0;
  let idx3 = 0;
  let idx5 = 0;
  for (let i = 0; i < n; i++) {
    const ugly2 = dp[idx2] * 2;
    const ugly3 = dp[idx3] * 3;
    const ugly5 = dp[idx5] * 5;
    const nextUgly = Math.min(ugly2, ugly3, ugly5);
    dp.push(nextUgly);
    if (nextUgly === ugly2) idx2++;
    if (nextUgly === ugly3) idx3++;
    if (nextUgly === ugly5) idx5++;
  }

  return dp[n - 1];
}
