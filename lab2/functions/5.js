function uFunc(x,y,z) {
    return (Math.max(x, y) + Math.max(x + y, z)) / Math.pow(Math.max(0.5, x + z), 2);
}

console.log(uFunc(14,8,8))