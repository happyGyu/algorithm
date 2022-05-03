function solution(numbers, target) {
  let answer = 0;
  const optionNum = 2 ** numbers.length;
  for (let i = 0; i < optionNum - 1; i++) {
    const options = i.toString(2).padStart(numbers.length, "0");
    let currResult = 0;
    for (let j = 0; j < options.length; j++) {
      if (options[j] === "1") {
        currResult += numbers[j];
      } else if (options[j] === "0") {
        currResult -= numbers[j];
      }
    }
    if (currResult === target) {
      answer++;
    }
  }
  return answer;
}
