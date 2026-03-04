let matrix = [
  [10, -3, 5, 8, 0],
  [-2, 7, -1, 4, 9],
  [6, -5, 3, 2, -7],
  [1, 12, -4, -6, 11],
  [-8, 13, -9, 14, -10],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] >= -5 && matrix[i][j] <= 7) {
      console.log(matrix[i][j]);
    }
  }
}
