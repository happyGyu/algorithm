function solution(people, limit) {
  let answer = 0;
  const sorted = people.sort((a, b) => b - a);
  for (const currWeight of sorted) {
    answer++;
    let remain = limit - currWeight;
    while (true) {
      const smallest = sorted[sorted.length - 1];
      remain -= smallest;
      if (remain >= 0) {
        sorted.pop();
      } else {
        break;
      }
    }
  }

  return answer;
}

function makeWeightDic(people) {
  const weightDic = {};
  for (const person of people) {
    if (weightDic[person]) {
      weightDic[person]++;
    } else {
      weightDic[person] = 1;
    }
  }
  return weightDic;
}
