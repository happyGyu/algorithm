// 단순히 정리해서 정직하게 배열 앞부터 찾는 식의 풀이. 정확도는 당연히 100%지만 효율성을 하나도 통과하지 못한다.
function solution(info, query) {
  const answer = [];
  const infoList = [];
  for (const currInfo of info) {
    const currInfoObj = {};
    const splited = currInfo.split(' ');
    currInfoObj.score = Number(splited.pop());
    currInfoObj.tags = splited;
    infoList.push(currInfoObj);
  }

  for (const currquery of query) {
    const commands = currquery.split(' ');
    const targetScore = Number(commands.pop());
    const currAnswer = infoList.reduce((acc, info) => {
      if (info.score < targetScore) {
        return acc;
      }
      for (const command of commands) {
        if (command === '-' || command === 'and') {
          continue;
        }
        if (!info.tags.includes(command)) {
          return acc;
        }
      }
      return acc + 1;
    }, 0);
    answer.push(currAnswer);
  }
  return answer;
}
