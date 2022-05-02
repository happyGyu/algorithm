function solution(numbers) {
  var answer = 0;
  const numberSet = new Set();
  makeNumbers(numbers, "", numberSet);
  for (const number of numberSet) {
    if (number[0] === "0") continue;
    if (isPrimeNumber(number)) {
      answer++;
    }
  }
  return answer;
}

function makeNumbers(numbers, prevNumber, numberSet) {
  if (numbers.length === 1) {
    numberSet.add(prevNumber + numbers);
  } else {
    for (let i = 0; i < numbers.length; i++) {
      const currNumber = prevNumber + numbers[i];
      const copiedNumbers = numbers.slice().split("");
      numberSet.add(currNumber);
      copiedNumbers.splice(i, 1);
      makeNumbers(copiedNumbers.join(""), currNumber, numberSet);
    }
  }
}

function isPrimeNumber(number) {
  if (Number(number) === 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (Number(number) % i === 0) return false;
  }
  return true;
}

//굉장히 브루트 포스한 방식으로 품. 재귀적으로 가능한 숫자 조합을 전부 뽑고 하나하나 소수인지 확인
// 숫자 조합을 만드는 makeNumbers함수가 썩 맘에 들지 않음. 빠르게 푸는 것을 목표로 하다보니 신경쓰지 못했는데, copiedNumbers를 매번 배열로 만들었다가, 문자열로 다시 합치는 것보다는 차라리 처음부터 배열로 관리하는게 효율적일 것 같다.