/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
  if (!node) {
    return node;
  }

  const hash = {};
  hash[node.val] = new Node(node.val);

  const q = [node];

  while (q.length) {
    const node = q.shift()!;
    node.neighbors.forEach((n) => {
      if (!hash[n.val]) {
        q.push(n);
        hash[n.val] = new Node(n.val);
      }

      hash[node.val].neighbors.push(hash[n.val]);
    });
  }

  return hash[node.val];
}
