function longestPalindromeSubseq(s: string): number {
  let max = 1;
  if (s.length === 1) {
    return max;
  }

  if (s.length === 2) {
    return s === s.split('').reverse().join('') ? 2 : max;
  }

  let tree = {};
  let word = [];
  dfs(tree, s, word);

  function dfs(tree, s, word) {
    for (let i = 0; i < s.length; i++) {
      if (!tree[s[i]]) {
        tree[s[i]] = {};
      }
      word.push(s[i]);
      if (tree[s[i]].count == null) {
        const wordStr = word.join('');
        const wordStrReversed = [...word].reverse().join('');
        if (word.length > 1 && wordStr === wordStrReversed) {
          tree[s[i]].count = wordStr.length;
          max = Math.max(max, wordStr.length);
        } else {
          tree[s[i]].count = 0;
        }
      }
      dfs(tree[s[i]], s.slice(i + 1), word);
      word.pop();
    }
  }

  return max;
}

// console.log(longestPalindromeSubseq('abcaabdjaacba'));
console.log(
  longestPalindromeSubseq(
    'euazbipzncptldueeuechubrcourfpftcebikrxhybkymimgvldiwqvkszfycvqyvtiwfckexmowcxztkfyzqovbtmzpxojfofbvwnncajvrvdbvjhcrameamcfmcoxryjukhpljwszknhiypvyskmsujkuggpztltpgoczafmfelahqwjbhxtjmebnymdyxoeodqmvkxittxjnlltmoobsgzdfhismogqfpfhvqnxeuosjqqalvwhsidgiavcatjjgeztrjuoixxxoznklcxolgpuktirmduxdywwlbikaqkqajzbsjvdgjcnbtfksqhquiwnwflkldgdrqrnwmshdpykicozfowmumzeuznolmgjlltypyufpzjpuvucmesnnrwppheizkapovoloneaxpfinaontwtdqsdvzmqlgkdxlbeguackbdkftzbnynmcejtwudocemcfnuzbttcoew'
  )
);
