let arr = [-5, 10, -3, 8, -1, 6, -7, 4, -9, 2];

for (let i = 0; i < arr.length; i++) {
  if (i % 2 !== 0 && arr[i] > 0) {
    arr[i] *= 3;
  }
  if (i % 2 === 0 && arr[i] < 0) {
    arr[i] /= 5;
  }
}

console.log(arr);
