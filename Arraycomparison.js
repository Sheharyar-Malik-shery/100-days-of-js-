// check both arrays are equal

function arraycomparison(arr1, arr2) {
  let compare = false;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          compare = true;
        } else {
          compare = false;
        }
      }
    }
  } else {
    compare = false;
  }
  return compare;
}
console.log(arraycomparison([1, 1, 3], [1, 1, 3]));
