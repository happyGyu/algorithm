function solution(brown, yellow) {
  const size = brown + yellow;
  for (let height = 1; height <= Math.sqrt(size); height++) {
    const width = size / height;
    if (isWidthValid(width) && isAnswer(width, height, brown)) {
      return [width, height];
    }
  }
}

function isWidthValid(width) {
  return width % 1 === 0;
}

function isAnswer(width, height, brown) {
  return 2 * width + 2 * height === brown + 4;
}

// 다른 알고리즘 문제랑 비교하면 비교적 컴퓨터의 능력을 활용하지 않은 풀이.
// 간단한 연립방정식이므로 손으로 풀면 O(1)도 가능하지만, width와 height간의 관계식까지만 구하고 그 이후 과정은 brute-force하게 진행함.
