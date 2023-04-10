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
    const cloneNode = map.get(n.val) || new Node(n.val);

    n.neighbors.forEach((item) => {
      if (!map.get(item.val)) {
        const cloneItem = new Node(item.val);
        queue.unshift(item);
        map.set(item.val, cloneItem);
      }

      cloneNode.neighbors.push(map.get(item.val));
    });

    map.set(cloneNode.val, cloneNode);
  }

  return map.get(node.val);
}

const map = {
  3: {
    n: [2, 4]
  },
  4: {
    n: [1,3]
  },
  2: {
    n: [1, 3]
  },
  1: {
    n: [2, 4]
  }
};
const q = [

];

const curr = {
  val: 3,
  n: [2, 4]
}
