function countvowles(str) {
  let newstr = str.toLowerCase().split("").join();
  console.log(newstr);
  let count = 0;
  let volves = "aeiou";
  for (let i = 0; i < volves.length; i++) {
    for (let j = 0; j < newstr.length; j++) {
      if (volves[i] === newstr[j]) {
        count++;
      }
    }
  }
  return `${count} Vowel letters was present in the given string`;
}

console.log(countvowles("Hi how are you?"));
