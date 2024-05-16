function sumAllNumbers(nums) {
  let arr = Array.from(nums.toString(), Number);

  let sum = arr.reduce((num1, num2) => {
    return Number(num1) + Number(num2);
  });

  console.log(typeof arr[0]);
  return sum;
}
console.log(sumAllNumbers(1234));
