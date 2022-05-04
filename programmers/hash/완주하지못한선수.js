function solution(participant, completion) {
  const log = {};

  for (const person of participant) {
    log[person] = log[person] ? log[person] + 1 : 1;
  }
  for (const person of completion) {
    log[person]--;
    if (log[person] === 0) {
      delete log[person];
    }
  }
  const answer = Object.keys(log)[0];
  return answer;
}
