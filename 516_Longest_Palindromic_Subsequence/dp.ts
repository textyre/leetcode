function longestPalindromeSubseq(s: string): number {
  const dp = [];
  for (let i = 0; i < s.length + 1; i++) {
    dp[i] = new Array(s.length + 1).fill(0);
  }

  // console.log(dp.length, dp[0].length);
  const reversedS = s.split('').reverse().join('');
  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = dp[i].length - 2; j >= 0; j--) {
      if (s[i] === reversedS[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  return dp[0][0];
}

// longestPalindromeSubseq('abcaabdjaacba');
console.log(
  longestPalindromeSubseq(
    'euazbipzncptldueeuechubrcourfpftcebikrxhybkymimgvldiwqvkszfycvqyvtiwfckexmowcxztkfyzqovbtmzpxojfofbvwnncajvrvdbvjhcrameamcfmcoxryjukhpljwszknhiypvyskmsujkuggpztltpgoczafmfelahqwjbhxtjmebnymdyxoeodqmvkxittxjnlltmoobsgzdfhismogqfpfhvqnxeuosjqqalvwhsidgiavcatjjgeztrjuoixxxoznklcxolgpuktirmduxdywwlbikaqkqajzbsjvdgjcnbtfksqhquiwnwflkldgdrqrnwmshdpykicozfowmumzeuznolmgjlltypyufpzjpuvucmesnnrwppheizkapovoloneaxpfinaontwtdqsdvzmqlgkdxlbeguackbdkftzbnynmcejtwudocemcfnuzbttcoew'
  )
);
