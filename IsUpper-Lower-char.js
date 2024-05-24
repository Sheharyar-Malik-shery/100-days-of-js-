function isUpperCase(char) {
  let isUpper = true;
  char === char.toUpperCase() ? (isUpper = true) : (isUpper = false);
  return `The Given Char is UpperCase ${isUpper}`;
}
console.log(isUpperCase("g"));
