function defineLargestNumber(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}

console.log(defineLargestNumber(3, 17, 48));
console.log(defineLargestNumber(14, 8, 8));
console.log(defineLargestNumber(52, 69, 42));
