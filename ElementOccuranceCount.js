function CountElementOccurrence(arr) {
  let elementCount = {};

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let element = arr[i];

    for (let j = i; j < arr.length; j++) {
      if (element === arr[j]) {
        count++;
      }
    }

    elementCount[element] = count;

    // Remove the counted element from the array to avoid counting it again
    arr = arr.filter((e) => e !== element);
    i = -1; // Reset loop index to start over with the modified array
  }

  return elementCount;
}

const result = CountElementOccurrence([1, 2, 1, 3, 2, 1, 3, 2]);
console.log(result);

//Not Working properly
// function CountElementOccrance(arr) {
//   let count = 0;
//   let Element = 0;
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     console.log(Element, "From Element", count, "From count");
//     count = 0;
//     Element = 0;
//     Element = arr[i];
//     // console.log(Element);
//     for (let j = i; j < arr.length; j++) {
//       //   console.log(arr[i], arr[j]);
//       if (arr[i] === arr[j]) {
//         count++;
//         arr.splice(arr[j], 1);
//         console.log("Find element ");
//       } else {
//         console.log("404 NOt Found");
//         console.log(arr, "Orignal one");
//       }
//     }
//     // console.log(arr1);
//   }
// }

// CountElementOccrance([1, 2, 1, 3, 2, 1, 3, 2]);
