function solution(answers) {
  let answer = [];
  const patterns = ["12345", "21232425", "3311224455"];
  let highScore = 0;
  for (let i = 0; i <= 2; i++) {
    let score = 0;
    const currPatternLength = patterns[i].length;
    for (let j = 0; j < answers.length; j++) {
      if (Number(patterns[i][j % currPatternLength]) === answers[j]) {
        score++;
      }
    }

    if (score > highScore) {
      highScore = score;
      answer = [i + 1];
    } else if (score === highScore) {
      answer.push(i + 1);
    }
  }

  return answer;
}

// 각 수포자들의 패턴들을 저장 후 하나씩 비교하고, 최고 점수와 비교해 새 최고점수가 갱신되면 기존 기록을 날리는 방식으로 구현.
// 다른 사람들의 풀이를 보니, filter 함수를 쓰거나, Math.max를 활용하면 코드가 훨씬 간결해진다는 것을 알게 됨..
