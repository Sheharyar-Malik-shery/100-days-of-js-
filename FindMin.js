function FindMinNum(arr) {
  let MinNum = 0;
  if (arr.length == 0) {
    console.log("Please Enetr the num");
  } else {
    let newarr = arr.sort((a, b) => a - b);
    MinNum = Math.min(...newarr);
  }

  return MinNum;
}
console.log(FindMinNum([-1, 1, 6, 2, 9, 3]));
