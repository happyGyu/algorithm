function solution(survey, choices) {
  const scoreMap = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  for (let i = 0; i < survey.length; i++) {
    const currChoice = choices[i];
    const currSurvey = survey[i];
    if (currChoice < 4) {
      scoreMap[currSurvey[0]] += 4 - currChoice;
    } else {
      scoreMap[currSurvey[1]] += currChoice - 4;
    }
  }
  let answer = '';
  const types = Object.keys(scoreMap);
  for (let i = 0; i < types.length; i += 2) {
    answer += scoreMap[types[i]] >= scoreMap[types[i + 1]] ? types[i] : types[i + 1];
  }
  return answer;
}
