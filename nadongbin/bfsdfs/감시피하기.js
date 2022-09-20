//18428
const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

const size = +input[0];
const originalMap = input.slice(1).map((line) => line.trim().split(' '));
const emptyAreas = [];
const teacherPositions = [];
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (originalMap[i][j] === 'X') {
      emptyAreas.push(`${i}${j}`);
    } else if (originalMap[i][j] === 'T') {
      teacherPositions.push([i, j]);
    }
  }
}

const obstacleCases = getCombinations(emptyAreas, 3);

console.log(
  obstacleCases.some((obstacleCase) =>
    checkAvailability(obstacleCase, originalMap, teacherPositions),
  )
    ? 'YES'
    : 'NO',
);

function checkAvailability(obstacleCase, originalMap, teacherPositions) {
  return teacherPositions.every(
    (teacherPosition) => !findStudent(obstacleCase, originalMap, teacherPosition),
  );
}

function findStudent(obstacleCase, originalMap, teacherPosition) {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  for (let i = 0; i < 4; i++) {
    let [originalX, originalY] = teacherPosition;
    let currentX = originalX + dx[i];
    let currentY = originalY + dy[i];
    while (currentX >= 0 && currentY >= 0 && currentX < size && currentY < size) {
      if (originalMap[currentX][currentY] === 'S') {
        return true;
      }
      if (obstacleCase.includes(`${currentX}${currentY}`)) {
        break;
      }
      currentX += dx[i];
      currentY += dy[i];
    }
  }
  return false;
}

function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
}
