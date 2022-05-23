function solution(n, info) {
  const range = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  const peachScore = calPeachScore(info);
  const goalToGetScore = info.map((n) => n + 1);

  let bestScore = 0;
  let answer = [];

  for (let num = 1; num <= 11; num++) {
    const combinations = makeCombination(range, num);
    for (const combination of combinations) {
      let currPeachScore = peachScore;
      let currScore = 0;
      const tempAnswer = new Array(11).fill(0);
      const required = combination.reduce((acc, targetScore) => {
        currPeachScore -= info[10 - targetScore] ? targetScore : 0;
        currScore += targetScore;
        tempAnswer[10 - targetScore] = goalToGetScore[10 - targetScore];
        return acc + goalToGetScore[10 - targetScore];
      }, 0);

      if (required > n || currScore <= currPeachScore) continue;
      tempAnswer[10] += n - required;
      if (currScore - currPeachScore > bestScore) {
        bestScore = currScore - currPeachScore;
        answer = tempAnswer;
      } else if (currScore - currPeachScore === bestScore) {
        answer = judgeBetterAnswer(answer, tempAnswer);
      }
    }
  }
  return answer.length ? answer : [-1];
}

function judgeBetterAnswer(answer1, answer2) {
  for (let i = 10; i >= 0; i--) {
    if (answer1[i] !== answer2[i]) {
      return answer1[i] > answer2[i] ? answer1 : answer2;
    }
  }
}

function calPeachScore(info) {
  return info.reduce((acc, n, i) => {
    if (n) {
      return acc + info.length - i - 1;
    }
    return acc;
  }, 0);
}

function makeCombination(range, num) {
  const result = [];
  if (num === 1) {
    return range.map((n) => [n]);
  }

  for (let i = 0; i < range.length; i++) {
    const nextRange = range.slice(i + 1);
    const combinations = makeCombination(nextRange, num - 1);
    const attached = combinations.map((combination) => [range[i], ...combination]);
    result.push(...attached);
  }

  return result;
}
