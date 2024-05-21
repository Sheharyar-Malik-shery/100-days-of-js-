//Write a function that returns sum of squares all elements

function SumOfSquares(arr) {
  return arr.reduce((a, b) => a + b * b);
}
console.log(SumOfSquares([1, 2, 3]));

//solution 02
// function sumOfSquares(arr) {
//     let sum = 0;
//     arr.forEach(function(element) {
//       sum += element * element;
//     });
//     return sum;
//   }

//   console.log(sumOfSquares([1, 2, 3])); // Output: 14
