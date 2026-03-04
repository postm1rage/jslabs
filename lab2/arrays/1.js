let arr = [];

arr[0] = 10;
arr[1] = 20;
arr[2] = 30;

console.log(arr[2]);

console.log(arr.length);

arr.splice(1, 1);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
