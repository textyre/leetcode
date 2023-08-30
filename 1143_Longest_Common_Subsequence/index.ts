function longestCommonSubsequence(text1: string, text2: string): number {
  const dp = new Array(text1.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(text2.length + 1).fill(0);
  }

  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = dp[i].length - 2; j >= 0; j--) {
      if (text1[i] === text2[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  return dp[0][0];
}

console.log(longestCommonSubsequence('abcba', 'abcbcba'));
