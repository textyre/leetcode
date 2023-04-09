export class Node {
  val: number;
  neighbors: Node[];
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function cloneGraph(node: Node | null): Node | null {
  const queue: Node[] = [];
  const map = new Map<number, Node>();

  if (!node) {
    return null;
  }

  queue.unshift(node);

  while (queue.length) {
    const n = queue.shift();

    if (!map.get(n.val)) {
      const cloneNode = new Node(n.val);
      map.set(cloneNode.val, cloneNode);
    }

    n.neighbors.forEach((item) => {
      const cloneItem = new Node(item.val);
      if (!map.get(item.val)) {
        queue.unshift(item);
        map.set(item.val, cloneItem);
      }
      n.neighbors.push(map.get(item.val) || cloneItem);
    });
  }

  return map.get(node.val);
}
