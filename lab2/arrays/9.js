let arr1 = [1, 2, 5, 4, 6];
let arr2 = [8, 2, 5, 9, 5];

let combined = arr1.concat(arr2);
combined.sort((a, b) => a - b);

let median;
let len = combined.length;

if (len % 2 === 1) {
  median = combined[Math.floor(len / 2)];
} else {
  median = (combined[len / 2 - 1] + combined[len / 2]) / 2;
}

console.log(median);
