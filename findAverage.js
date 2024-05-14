// calculate the Average of numbers
//Method no 01
// function average(num) {
//   let sum = num.reduce((a, b) => a + b);
//   return sum / num.length;
// }

//Method no 2
function average(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum / num.length;
}

console.log(average([1, 2, 3, 4]));
