function solution(a, edges) {
  if (a.reduce((acc, n) => acc + n, 0) !== 0) return -1;
  const tree = makeTree(edges);
  let answer = BigInt(0);
  const stack = [[0, -1]];
  const visited = new Array(a.length).fill(false);
  while (stack.length) {
    const curr = stack.pop();
    if (visited[curr[0]]) {
      answer += BigInt(Math.abs(a[curr[0]]));
      a[curr[1]] += a[curr[0]];
      continue;
    }

    stack.push(curr);
    visited[curr[0]] = true;

    for (const child of tree[curr[0]]) {
      if (child !== curr[1]) {
        stack.push([child, curr[0]]);
      }
    }
  }
  return answer;
}

function makeTree(edges) {
  const tree = Array.from({ length: edges.length + 1 }, () => new Array());
  for (const edge of edges) {
    tree[edge[0]].push(edge[1]);
    tree[edge[1]].push(edge[0]);
  }
  return tree;
}
