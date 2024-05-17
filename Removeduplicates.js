function removeduplicateNums(arr) {
  //method 01
  //   let another = new Set(arr);
  //   console.log(Array.from(another));

  //method 02
  //   let uniqarr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (!uniqarr.includes(arr[i])) {
  //       uniqarr.push(arr[i]);
  //     } else {
  //       console.log("duplicate number ", arr[i]);
  //     }
  //   }
  //   return uniqarr;

  //method 03
  let uniqarr = arr.filter((num, index) => arr.indexOf(num) === index);
  //indexOf return first occurance of the elemnt in array
  return uniqarr;
}
console.log(removeduplicateNums([10, 11, 10, 12, 12, 1, 1, 2, 3, 5, 6, 5]));
