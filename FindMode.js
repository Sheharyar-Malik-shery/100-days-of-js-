function FindMode(arr) {
  let mosttimes = 0;
  let element = 0;
  let num = 0;
  while (arr.length > 0) {
    let count = 0;
    element = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        count++;
      }
    }
    if (count > mosttimes) {
      mosttimes = count;
      num = element;
    }
    arr = arr.filter((num) => num !== element);
  }

  return { num, mosttimes };
}

console.log(FindMode([2, 1, 2, 1, 1]));
