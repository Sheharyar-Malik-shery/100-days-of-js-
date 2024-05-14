function findfactorial(num) {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * findfactorial(num - 1);
  }
}
console.log(findfactorial(3));

// find factorial of number n (n means any nubmber) solution 01
// let counter = 1;
// let arr = [];
// function findfactorial(num) {
//   if (counter > num) {
//     return;
//   }
//   console.log("the iteration is ", counter);
//   arr.push(counter);
//   console.log(arr);
//   counter++;
//   findfactorial(num);
// }

// console.log(findfactorial(4));
// console.log(arr.reduce((a, b) => a * b));

//solution 03
// function find(number){
//     let num = 1;
//     for(let i =1; i<=number; i++){
//       num *= i
//     }
//     return num;
//   }
//   console.log(find(6))
