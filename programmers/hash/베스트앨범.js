function solution(genres, plays) {
  const answer = [];
  const log = {};
  for (let i = 0; i < genres.length; i++) {
    const currGenre = genres[i];
    const currPlay = plays[i];
    if (log[currGenre]) {
      log[currGenre].total += currPlay;
      log[currGenre].musics.push([i, currPlay]);
    } else {
      log[currGenre] = { musics: [[i, currPlay]], total: currPlay };
    }
  }

  const results = Object.values(log);
  results.sort((a, b) => b.total - a.total);
  for (const result of results) {
    const sortedMusics = result.musics.sort((a, b) => b[1] - a[1]);
    answer.push(sortedMusics[0][0]);
    if (sortedMusics.length >= 2) {
      answer.push(sortedMusics[1][0]);
    }
  }
  return answer;
}
