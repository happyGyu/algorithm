// 문제 설명 그대로 배열을 순환하면서 풀이.
// 효율성 통과 불가
function solution(board, skill) {
  for (const currentSkill of skill) {
    const [type, r1, c1, r2, c2, amount] = currentSkill;
    for (let i = r1; i <= r2; i++) {
      for (let j = c1; j < c2; j++) {
        if (type === 1) {
          board[i][j] -= amount;
        } else {
          board[i][j] += amount;
        }
      }
    }
  }
  let answer = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] > 0) {
        answer++;
      }
    }
  }
  return answer;
}

//누적합을 활용한 풀이
//효율성도 통과
function solution(board, skill) {
  const rLength = board.length;
  const cLength = board[0].length;
  const accArr = new Array(rLength).fill().map(() => new Array(cLength).fill(0));
  for (const currentSkill of skill) {
    const [type, r1, c1, r2, c2, amount] = currentSkill;
    const conditionedAmount = type === 1 ? amount * -1 : amount;
    accArr[r1][c1] += conditionedAmount;
    if (r2 < rLength - 1) accArr[r2 + 1][c1] -= conditionedAmount;
    if (c2 < cLength - 1) accArr[r1][c2 + 1] -= conditionedAmount;
    if (r2 < rLength - 1 && c2 < cLength - 1) accArr[r2 + 1][c2 + 1] += conditionedAmount;
  }

  for (let i = 0; i < rLength; i++) {
    let rAccNum = 0;
    for (let j = 0; j < cLength; j++) {
      rAccNum += accArr[i][j];
      accArr[i][j] = rAccNum;
    }
  }

  let answer = 0;
  for (let j = 0; j < cLength; j++) {
    let cAccNum = 0;
    for (let i = 0; i < rLength; i++) {
      cAccNum += accArr[i][j];
      accArr[i][j] = cAccNum;
      if (board[i][j] + cAccNum > 0) {
        answer++;
      }
    }
  }
  return answer;
}
