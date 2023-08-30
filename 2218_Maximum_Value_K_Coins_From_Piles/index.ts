function maxValueOfCoins(piles: number[][], k: number): number {
  const n = piles.length;
  const dp = new Array(piles.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(k + 1).fill(-1);
  }
  console.log(dp);
  function dfs(i, coins) {
    if (i === n) {
      return 0;
    }
    if (dp[i][coins] !== -1) {
      return dp[i][coins];
    }

    dp[i][coins] = dfs(i + 1, coins);
    let currPile = 0;
    let to = Math.min(piles[i].length, coins);
    for (let j = 0; j < to; j++) {
      currPile += piles[i][j];
      const nextPile = currPile + dfs(i + 1, coins - j - 1);
      const maxCoins = Math.max(dp[i][coins], nextPile);
      dp[i][coins] = maxCoins;
    }
    return dp[i][coins];
  }

  return dfs(0, k);
}
const ar = [
  [3, 5, 90, 1, 100, 73],
  [2, 1000, 5, 100, 90, 70, 13],
  [100, 1, 75, 2],
  [99],
  [11, 23, 15, 12, 1],
];
const dp = [
  [-1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1],
  [-1, -1, -1, -1, 61],
];
maxValueOfCoins(ar, 4);
