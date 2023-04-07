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
  let pByHor = 0;
  let pByVer = 0;
  let stopCalcByHor = false;
  for (let i = 0; i < rowsCount; i++) {
    let isWasCrossing = false;

    matrix[i] = new Array<number>(columnsCount).fill(0);
    // if (i === 5) {
    //   debugger;
    // }
    for (let j = 0; j < matrix[i].length; j++) {
      let icor = i >= midRow ? midRow - i : Math.abs(i - midRow);
      let jcor = j - midCol;
      if (isInCoordinate(jcor, icor, p1cors)) {
        matrix[i][j]++;
      }

      if (isInCoordinate(jcor, icor, p2cors)) {
        matrix[i][j]++;
      }

      if (matrix[i][j] === 2) {
        // calculate
        isWasCrossing = true;
        if (!stopCalcByHor) {
          pByHor++;
        }
      }
    }
    if (isWasCrossing) {
      pByVer++;
      stopCalcByHor = true;
    }
  }

  const P1 = Math.abs(ax2 - ax1) * Math.abs(ay2 - ay1);
  const P2 = Math.abs(bx2 - bx1) * Math.abs(by2 - by1);
  console.log(pByHor, pByVer)
  const diff = pByHor * pByVer;
  console.log(P1, P2, diff);

  return P1 + P2 - diff;
};

function isInCoordinate(j: number, i: number, [x1, x2, y1, y2]: number[]) {
  return j >= x1 && j < x2 && i >= y1 && i < y2
}

// computeArea(-3, 0, 3, 4, 0, -1, 9, 2);
// computeArea(-2, -2, 2, 2, 3, 3, 4, 4);
// computeArea(2, -16, 10, -10, 4, -14, 16, -5);
computeArea(-2286, -1384, -2284, -1380, -2284, -1384, -2273, -1375);

