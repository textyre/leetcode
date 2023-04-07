const WATER = 1;
const LAND = 0;
const DIRECTIONS = [
  [0, -1],
  [-1, 0],
  [0, 1],
  [1, 0],
];

function closedIsland(grid: number[][]): number {
  let count = 0;
  this.visited = {};
  this.queue = [];
  let isIsland = false;

  for (let i = 0; i < grid.length; i++) {
    if (!this.visited[i]) {
      this.visited[i] = {};
    }
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 1 && j === 0) {
        debugger;
      }
      if (grid[i][j] === LAND && !this.visited[i][j]) {
        this.queue.push([i, j]);
        isIsland = findIsland.call(this, grid);
        if (isIsland) {
          count++;
        }
      }

      this.visited[i][j] = true;
    }
  }
  return count;
}

function findIsland(grid) {
  let isIsland = true;
  while (this.queue.length) {
    const [i, j] = this.queue.shift();
    if (!this.visited[i]) {
      this.visited[i] = {};
    }

    if (!this.visited[i][j]) {
      for (const [x, y] of DIRECTIONS) {
        let res = checkLandOrWater.call(this, i + x, j + y, grid);
        isIsland = isIsland && res;
        // if (!isLandOrWater) {
        //   this.visited[i][j] = true;
        //   this.queue = [];
        //   return false;
        // }
      }

      this.visited[i][j] = true;
    }
  }

  return isIsland;
}

function checkLandOrWater(i, j, grid) {
  if (grid[i] === undefined || grid[i][j] === undefined) {
    return false;
  }

  // if (grid[i][j] === LAND && this.visited?.[i]?.[j]) {
  //   return false;
  // }

  if (grid[i][j] === WATER) {
    return true;
  }

  if (!this.visited[i] || !this.visited[i][j]) {
    this.queue.push([i, j]);
  }
  return true;
}

const test1 = [
  [1, 1, 1, 1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0],
];

const test2 = [
  [0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
  [1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 1, 0],
];

const test30 = [
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 1, 1, 0],
  [1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
];

const q = [
  [7, 9],
  [8, 8],
];

const vis = [
  [5, 6],
  [6, 6],
  [6, 7],
  [7, 6],
  [6, 8],
  [7, 7],
  [7, 7],
  [8, 6],
  [7, 8],
  [7, 8],
  [9, 6],
];

console.log(closedIsland(test1));
