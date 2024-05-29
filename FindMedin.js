function findMedin(arr) {
  let medin = 0;
  let index = 0;
  let len = arr.length;
  let sort = arr.sort((a, b) => a - b);
  if (len % 2 !== 0) {
    index = Math.floor(len / 2);
    medin = sort[index];
  } else {
    index = len / 2;
    let P2 = index - 1;
    medin = sort[index] + sort[P2];
  }
  return medin;
}
console.log(findMedin([6, 4, 2, 9]));
