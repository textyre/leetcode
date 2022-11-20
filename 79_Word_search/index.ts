function exist(board: string[][], word: string): boolean {
  function dfs(i: number, c: number, wordIndex: number): boolean {
    if (i < 0 || i >= board.length || c < 0 || c >= board[0].length || board[i][c] !== word[wordIndex] || board[i][c] === '#') {
      return false;
    }

    const char = board[i][c];
    board[i][c] = '#';
    wordIndex++;
    if (wordIndex === word.length) {
      return true;
    }

    let result = false;
    for (const [id, cd] of [[1,0], [0, 1], [-1, 0], [0, -1]]) {
      result = dfs(i + id, c + cd, wordIndex);
      if (result) {
        return true;
      }
    }

    board[i][c] = char;
    return result;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        const result = dfs(i, j, 0);
        if (result) {
          return result;
        }
      }
    }
  }

  return false;
};

console.log(exist([
  ["C","A","A"],
  ["A","A","A"],
  ["B","C","D"]
], "AAB"))
