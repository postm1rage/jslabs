function perimeter(...coords) {
  let p = 0;
  let n = coords.length / 2;

  for (let i = 0; i < n; i++) {
    let x1 = coords[i * 2];
    let y1 = coords[i * 2 + 1];
    let x2 = coords[((i + 1) % n) * 2];
    let y2 = coords[((i + 1) % n) * 2 + 1];

    p += Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

  return p;
}
