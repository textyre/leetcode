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
  const a1 = Math.abs(ax2-ax1) * Math.abs(ay2-ay1);
  const a2 = Math.abs(bx2-bx1) * Math.abs(by2-by1);

  const x5 = Math.max(ax1, bx1);
  const y5 = Math.max(ay1, by1);
  const x6 = Math.min(ax2, bx2);
  const y6 = Math.min(ay2, by2);

  const x = x6 - x5;
  const y = y6 - y5;
  if(x < 0 || y < 0){
    return a1+a2
  }

  let a3 = x * y;
  return a1+a2-a3;
};
