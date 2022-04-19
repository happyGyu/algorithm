const nameDic = {};
const msgDic = {
  Enter: "님이 들어왔습니다.",
  Leave: "님이 나갔습니다."
};

function solution(record) {
  const tempAnswer = [];
  for (const data of record) {
    const [command, uid, currName] = data.split(" ");
    if (command !== "Change") {
      tempAnswer.push({ uid, command });
    }
    if (command !== "Leave") {
      nameDic[uid] = currName;
    }
  }
  const answer = tempAnswer.map((temp) => {
    if (temp.command === "Change") {
      return;
    } else {
      return `${nameDic[temp.uid]}${msgDic[temp.command]}`;
    }
  });
  return answer;
}
