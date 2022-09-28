function solution(key, lock) {
  const keySize = key.length;
  let keyEdges = [];
  for (let i = 0; i < keySize; i++) {
    for (let j = 0; j < keySize; j++) {
      if (key[i][j] === 1) {
        keyEdges.push([i, j]);
      }
    }
  }
  for (let i = 0; i < 4; i++) {
    for (let j = keySize * -1 + 1; j < keySize; j++) {}
    currentKeyEdges = rotateCW(keyEdges);
  }
  var answer = true;

  return answer;
}

function rotateCW(arr) {
  const length = arr.length;
  const rotatedArr = arr.map(([originalRow, originalColumn]) => {
    return [originalColumn, length - originalRow];
  });
  return rotatedArr;
}

function isValidKey(keyEdges, lock) {
  const lockSize = lock.length;
  keyEdges.forEach((keyEdge) => {
    if (keyEdge[0] >= 0 && keyEdge[0] < lockSize && keyEdges[1] >= 0 && keyEdge[1] < lockSize) {
      if (lock[keyEdge[0]][keyEdge[1]] === 1) {
        return false;
      } else {
        lock[keyEdge[0]][keyEdge[1]] = 1;
      }
    }
  });

  for (let i = 0; i < lockSize; i++) {
    for (let j = 0; j < lockSize; j++) {
      if (lock[i][j] === 0) return false;
    }
  }

  return true;
}
