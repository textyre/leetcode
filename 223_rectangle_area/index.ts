function computeArea(
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,

  bx1: number,
  by1: number,
  bx2: number,
  by2: number
): number {
  const matrix = [];
  const p1cors = [ax1, ax2, ay1, ay2];
  const p2cors = [bx1, bx2, by1, by2];
  const xcors = [ax1, ax2, bx1, bx2];
  const ycors = [ay1, ay2, by1, by2];
  const midCol = Math.abs(Math.min(...xcors));
  const midRow = Math.abs(Math.max(...ycors));
  console.log(midRow, midCol);
  const rowsCount = Math.abs(Math.min(...ycors)) + Math.abs(Math.max(...ycors)) + 2;
  const columnsCount = Math.abs(Math.min(...xcors)) + Math.abs(Math.max(...xcors)) + 2;
  console.log(rowsCount, columnsCount)
  for (let i = 0; i < rowsCount; i++) {
    matrix[i] = new Array<number>(14).fill(0);
    for (let j = 0; j < matrix[i].length; j++) {
      let icor = Math.abs(i - midRow);
      let jcor = j - midCol;
      if (isInCoordinate(jcor, icor, p1cors)) {
        matrix[i][j]++;
      }

      if (isInCoordinate(jcor, jcor, p2cors)) {
        matrix[i][j]++;
      }

      if (matrix[i][j] === 2) {
        // calculate
      }
    }
  }

  console.log(matrix)

  // const P1 = (Math.abs(ax1) + Math.abs(ax2)) * (Math.abs(ay1) + Math.abs(ay2));
  // const P2 = (Math.abs(bx1) + Math.abs(bx2)) * (Math.abs(by1) + Math.abs(by2));
  // const diff = ;
  // return P1 + P2 - diff;
  return 0;
  // const xcor = i - midx;
  // const ycor = y - midy;
};

function isInCoordinate(j: number, i: number, [x1, x2, y1, y2]: number[]) {
  return j >= x1 && j <= x2 && i >= y1 && i <= y2
}

computeArea(-3, 0, 3, 4, 0, -1, 9, 2);
// [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ]
