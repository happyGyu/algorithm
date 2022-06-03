// 단순히 정리해서 정직하게 배열 앞부터 찾는 식의 풀이. 정확도는 당연히 100%지만 효율성을 하나도 통과하지 못한다.
function solution(info, query) {
  const answer = [];
  const infoList = [];
  for (const currInfo of info) {
    const currInfoObj = {};
    const splited = currInfo.split(" ");
    currInfoObj.score = Number(splited.pop());
    currInfoObj.tags = splited;
    infoList.push(currInfoObj);
  }

  for (const currquery of query) {
    const commands = currquery.split(" ");
    const targetScore = Number(commands.pop());
    const currAnswer = infoList.reduce((acc, info) => {
      if (info.score < targetScore) {
        return acc;
      }
      for (const command of commands) {
        if (command === "-" || command === "and") {
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

//Info 별로 검색에 걸릴수 있는 query의 종류는 총 16개. 그렇기 때문에 모든 info의 점수를 각각 16개의 key에 할당한 후 query 수행을 효율적으로 하기 위한 풀이
// 그러나 효율성 검사를 한개도 통과하지 못함. 어디서 실수가 있는지 정확 테스트도 몇개 통과를 못하는데, 애초에 효율성을 통과하지 못하므로 패스.
function solution(info, query) {
  const answer = [];
  const infoHash = {};

  info.forEach((currInfo) => {
    const splited = currInfo.split(" ");
    const score = Number(splited.pop());
    for (let i = 0; i < 16; i++) {
      const option = i.toString(2).padStart(4, "0");
      const keys = [];
      for (let j = 0; j < option.length; j++) {
        if (option[j] === "1") {
          keys.push(splited[j]);
        } else {
          keys.push("-");
        }
      }
      const keyString = keys.join(" and ");
      if (infoHash[keyString]) {
        infoHash[keyString].push(score);
      } else {
        infoHash[keyString] = [score];
      }
    }
  });

  for (const currQuery of query) {
    const splited = currQuery.split(" ");
    const targetScore = Number(splited.pop());
    const hashKey = splited.join(" ");
    const filteredScores = infoHash[hashKey];
    const currAnswer = filteredScores.reduce((acc, score) => {
      if (score >= targetScore) {
        return acc + 1;
      }
      return acc;
    }, 0);
    answer.push(currAnswer);
  }

  return answer;
}
