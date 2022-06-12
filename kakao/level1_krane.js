function solution(board, moves) {
  const parsedBoard = Array.from(
    { length: board[0].length },
    () => new Array()
  );
  board.forEach((line) =>
    line.forEach((n, i) => {
      if (n) {
        parsedBoard[i].push(n);
      }
    })
  );

  const basket = [];
  let answer = 0;

  for (const move of moves) {
    const curr = parsedBoard[move - 1].shift();
    if (!curr) continue;
    if (basket[basket.length - 1] === curr) {
      answer += 2;
      basket.pop();
    } else {
      basket.push(curr);
    }
  }
  return answer;
}
