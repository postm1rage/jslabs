let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let sumMaxInRows = 0;
let productMinInCols = 1;

for (let i = 0; i < matrix.length; i++) {
  let maxInRow = matrix[i][0];
  for (let j = 1; j < matrix[i].length; j++) {
    if (matrix[i][j] > maxInRow) {
      maxInRow = matrix[i][j];
    }
  }
  sumMaxInRows += maxInRow;
}

for (let j = 0; j < matrix[0].length; j++) {
  let minInCol = matrix[0][j];
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][j] < minInCol) {
      minInCol = matrix[i][j];
    }
  }
  productMinInCols *= minInCol;
}

console.log("Сумма наибольших значений строк:", sumMaxInRows);
console.log("Произведение наименьших значений столбцов:", productMinInCols);
