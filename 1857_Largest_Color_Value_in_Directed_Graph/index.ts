function largestPathValue(colors: string, edges: number[][]): number {
  const graph: {
    [x: number]: number[];
  } = {};
  const indegree = new Array(colors.length).fill(0);

  for (let [from, to] of edges) {
    if (from === to) return -1;
    graph[from] = [...(graph[from] || []), to];
    indegree[to]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < colors.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  let maxColor = 0;
  let nodesOfColors = Array.from({ length: colors.length }, () =>
    Array(26).fill(0)
  );

  while (queue.length) {
    const vertex = queue.shift();
    const color = colors.charCodeAt(vertex) - 97;
    nodesOfColors[vertex][color]++;
    maxColor = Math.max(maxColor, nodesOfColors[vertex][color]);

    if (!graph[vertex]) continue;

    for (let neighbor of graph[vertex]) {
      indegree[neighbor]--;

      for (let i = 0; i < 26; i++) {
        nodesOfColors[neighbor][i] = Math.max(
          nodesOfColors[neighbor][i],
          nodesOfColors[vertex][i]
        );
      }

      if (indegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return indegree.some((x) => x > 0) ? -1 : maxColor;
}

const colors = 'abaca';
const edges = [
  [0, 1],
  [0, 2],
  [2, 3],
  [3, 4],
];

console.log(largestPathValue(colors, edges));
