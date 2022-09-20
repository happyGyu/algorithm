function solution(board) {
  const size = board[0].length;
  const visited = new Array(size).fill().map(() => new Array(size).fill(""));
  const queue = [[0, 0, "h", 0]];
  while (queue.length) {
    const [x, y, dir, step] = queue.shift();
    if (isArrived(x, y, dir, size)) return step;
    if (dir === "h") {
      if (isValid(x, y + 2, board)) {
        checkAndAppend(x, y + 1, "h", step + 1, visited, queue);
      }
      if (isValid(x, y - 1, board)) {
        checkAndAppend(x, y - 1, "h", step + 1, visited, queue);
      }
      if (isValid(x - 1, y, board) && isValid(x - 1, y + 1, board)) {
        checkAndAppend(x - 1, y, "h", step + 1, visited, queue);
        checkAndAppend(x - 1, y, "v", step + 1, visited, queue);
        checkAndAppend(x - 1, y + 1, "v", step + 1, visited, queue);
      }
      if (isValid(x + 1, y, board) && isValid(x + 1, y + 1, board)) {
        checkAndAppend(x + 1, y, "h", step + 1, visited, queue);
        checkAndAppend(x, y, "v", step + 1, visited, queue);
        checkAndAppend(x, y + 1, "v", step + 1, visited, queue);
      }
    } else if (dir === "v") {
      if (isValid(x, y - 1, board) && isValid(x + 1, y - 1, board)) {
        checkAndAppend(x, y - 1, "v", step + 1, visited, queue);
        checkAndAppend(x, y - 1, "h", step + 1, visited, queue);
        checkAndAppend(x + 1, y - 1, "h", step + 1, visited, queue);
      }
      if (isValid(x, y + 1, board) && isValid(x + 1, y + 1, board)) {
        checkAndAppend(x, y + 1, "v", step + 1, visited, queue);
        checkAndAppend(x, y, "h", step + 1, visited, queue);
        checkAndAppend(x + 1, y, "h", step + 1, visited, queue);
      }
      if (isValid(x - 1, y, board)) {
        checkAndAppend(x - 1, y, "v", step + 1, visited, queue);
      }
      if (isValid(x + 2, y, board)) {
        checkAndAppend(x + 1, y, "v", step + 1, visited, queue);
      }
    }
  }
}

function isArrived(x, y, dir, size) {
  return (
    (x === size - 1 && y === size - 2 && dir === "h") ||
    (x === size - 2 && y === size - 1 && dir === "v")
  );
}

function checkAndAppend(x, y, dir, step, visited, queue) {
  if (visited[x][y].includes(dir)) return;
  visited[x][y] += dir;
  queue.push([x, y, dir, step]);
}

function isValid(x, y, board) {
  const size = board[0].length;
  return !(x < 0 || y < 0 || x >= size || y >= size || board[x][y] === 1);
}
