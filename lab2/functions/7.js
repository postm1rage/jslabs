function seq(n) {
  if (n === 1) return 1;

  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum += seq(i);
  }
  return Math.sin(sum);
}

console.log(seq(4));
