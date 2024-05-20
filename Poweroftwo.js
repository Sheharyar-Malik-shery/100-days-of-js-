function PowerOfTwo(num) {
  let poweroftwo = false;
  if (num % 2 === 0) {
    poweroftwo = true;
  }
  return poweroftwo;
}
console.log(PowerOfTwo(-100));
