function solution(expression) {
  let answer = 0;
  const options = ['+*-', '+-*', '*+-', '*-+', '-+*', '-*+'];
  const numbers = expression.split(/[+*-]/g).map((n) => Number(n));
  const symbols = expression.split('').filter((s) => ['+', '-', '*'].includes(s));
  for (const option of options) {
    answer = Math.max(answer, calScore(option, numbers, symbols));
  }
  return answer;
}

function calScore(option, numbers, symbols) {
  let score = 0;
  let currNums = numbers.slice();
  let currSymbols = symbols.slice();
  for (currSymbol of option) {
    const newCurrNums = currSymbols.map((symbol, idx) => {
      if (symbol === currSymbol) {
        if (symbol === '+') return currNums[idx] + currNums[idx + 1];
        if (symbol === '-') return currNums[idx] - currNums[idx + 1];
        if (symbol === '*') return currNums[idx] * currNums[idx + 1];
      }
      currSymbols = currSymbols.filter((symbol) => symbol !== currSymbol);
      return currNums[idx + 1];
    });
    console.log(newCurrNums);
    currNums = newCurrNums;
  }
  return Math.abs(score);
}
