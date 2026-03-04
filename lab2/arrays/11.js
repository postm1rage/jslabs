let arr = [7, 6, 5, 4, 3, 2, 1];
let isSorted = true;
let firstViolationIndex = -1;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] < arr[i + 1]) {
    isSorted = false;
    firstViolationIndex = i + 1;
    break;
  }
}

if (isSorted) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  console.log(reversed);
} else {
  console.log(firstViolationIndex);
}
