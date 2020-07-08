const meetingPlanner = (A, B, dur) => {
  let i = 0;
  let j = 0;

  while (i < A.length && j < B.length) {
    const startTime = Math.max(A[i][0], B[j][0]);
    if (Math.min(A[i][1], B[j][1]) - startTime >= dur) {
      return [startTime, startTime + dur];
    } else if (A[i][1] <= B[j][1]) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return [];
};

module.exports = meetingPlanner;
