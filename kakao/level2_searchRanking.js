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
    
  Object.keys(infoHash).forEach(key => {
    infoHash[key].sort((a, b) => a - b);
  });
    
  for (const currQuery of query) {
    const splited = currQuery.split(" ");
    const targetScore = Number(splited.pop());
    const hashKey = splited.join(" ");
    const filteredScores = infoHash[hashKey];
    if (!filteredScores) {
        answer.push(0);
        continue;
    }
    let [left, right] = [0, filteredScores.length];
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      filteredScores[mid] >= targetScore ? (right = mid) : (left = mid + 1);
    }

    answer.push(filteredScores.length - left);
  }

  return answer;
}
