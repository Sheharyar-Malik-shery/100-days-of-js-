let Array = [0, -1, -3, 3, 4, 7, 10, 8, 11, -11];

//solution 01
let largernum = Math.max(...Array);
console.log(largernum);

//solution 02 without manipulate the orignal one
// function findMaximumNum(arr) {
//   let sortedarr = arr.sort((a, b) => a - b);
//   console.log(sortedarr);
//   console.log(sortedarr[sortedarr.length - 1]);
// }

//soution 03 manipulating the orignal one
// let Array = [0, -1, -3, 3, 4, 7, 10, 8, 11, -11];
function findMaximumNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr[arr.length - 1];
}
console.log(findMaximumNum(Array));
