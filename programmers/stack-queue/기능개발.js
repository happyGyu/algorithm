function solution(progresses, speeds) {
  const endDay = [];
  for (let i = 0; i < progresses.length; i++) {
    const remainWork = 100 - progresses[i];
    const remainDay = Math.ceil(remainWork / speeds[i]);
    endDay.push(remainDay);
  }

  let max = endDay[0];
  let cnt = 1;
  console.log(endDay);
  const answer = [];
  for (let i = 1; i < endDay.length; i++) {
    if (endDay[i] > max) {
      answer.push(cnt);
      max = endDay[i];
      cnt = 1;
    } else {
      cnt++;
    }
  }
  answer.push(cnt);

  return answer;
}
