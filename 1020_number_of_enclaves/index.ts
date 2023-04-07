import { test1, test2, test27 } from './data';

const LAND = 1;
const ZERO = 0;
const DIRECTIONS = [
  [0, -1],
  [-1, 0],
  [0, 1],
  [1, 0],
];

function numEnclaves(grid: number[][]): number {
  let ones = 0;
  this.visited = {};
  this.queue = [];

  for (let i = 0; i < grid.length; i++) {
    if (!this.visited[i]) {
      this.visited[i] = {};
    }
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 4 && j === 7) {
        debugger;
      }
      if (grid[i][j] === LAND && !this.visited[i][j]) {
        this.queue.unshift([i, j]);
        ones += findOnes.call(this, grid);
      }

      this.visited[i][j] = true;
    }
  }
  return ones;
}

function findOnes(grid) {
  let isTouchedBorder = false;
  let ones = 0;
  while (this.queue.length) {
    const [i, j] = this.queue.shift();

    if (!this.visited[i]) {
      this.visited[i] = {};
    }

    if (!this.visited[i][j]) {
      ones++;
    }

    for (const [x, y] of DIRECTIONS) {
      const res = hasTouchedBorder.call(this, i + x, j + y, grid);
      isTouchedBorder = isTouchedBorder || res;
    }

    this.visited[i][j] = true;
  }

  return isTouchedBorder ? 0 : ones;
}

function hasTouchedBorder(i, j, grid) {
  if (grid[i]?.[j] === undefined) {
    return true;
  }

  if (!this.visited[i]?.[j] && grid[i][j] === LAND) {
    this.queue.push([i, j]);
  }

  return false;
}

console.log(numEnclaves(test27));
