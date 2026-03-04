let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
console.log("Исходный массив:", arr);

let maxIndex = 0;
let minIndex = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > arr[maxIndex]) {
    maxIndex = i;
  }
  if (arr[i] < arr[minIndex]) {
    minIndex = i;
  }
}

let temp = arr[maxIndex];
arr[maxIndex] = arr[minIndex];
arr[minIndex] = temp;

console.log("Массив после замены:", arr);
