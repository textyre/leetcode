function largestPathValue(colors: string, edges: number[][]): number {
  const adj = {};
  for (let [from, to] of edges) {
    adj[from] = {
      [to]: to,
      ...adj[from],
    };
  }
  console.log(adj);
  return 0;
}

const colors = 'abaca';
const edges = [
  [0, 1],
  [0, 2],
  [2, 3],
  [3, 4],
  [3, 5],
];

largestPathValue(colors, edges);
