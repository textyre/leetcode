import { test1, test2, test27 } from './data';

const LAND = 1;
const LAND_IN_PROCESS = 2;
const ZERO = 0;
const WAS = '*';

const DIRECTIONS = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
];

function numEnclaves(grid: (number | string)[][]): number {
  let ones = 0;
  this.queue = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === LAND && grid[i][j] !== WAS) {
        this.queue.unshift([i, j]);
        grid[i][j] = LAND_IN_PROCESS;
        ones += findOnes.call(this, grid);
      }

      grid[i][j] = WAS;
    }
  }
  return ones;
}

function findOnes(grid) {
  let isTouchedBorder = false;
  let ones = 0;
  while (this.queue.length) {
    const [i, j] = this.queue.shift();

    if (grid[i][j] === LAND_IN_PROCESS) {
      ones++;
    }

    for (const [x, y] of DIRECTIONS) {
      const res = hasTouchedBorder.call(this, i + x, j + y, grid);
      isTouchedBorder = isTouchedBorder || res;
    }

    grid[i][j] = WAS;
  }

  return isTouchedBorder ? 0 : ones;
}

function hasTouchedBorder(i, j, grid) {
  if (grid[i]?.[j] === undefined) {
    return true;
  }

  if (grid[i][j] === LAND) {
    grid[i][j] = LAND_IN_PROCESS;
    this.queue.push([i, j]);
  }

  return false;
}

console.log(numEnclaves(test27));
