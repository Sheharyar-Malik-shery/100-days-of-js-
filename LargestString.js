function longestWord(str) {
    const words = str.split(" ");
    let longestLength = 0;
    let longestWord = "";
  
    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];
      const currentLength = currentWord.length;
  
      if (currentLength > longestLength) {
        longestLength = currentLength;
        longestWord = currentWord;
      }
    }
  
    return {longestWord,longestLength}
  }
  
  const str = "hi! how are you are you struling in learning js";
  let display = longestWord(str);
  console.log(`The largert word in the string is ${display.longestWord} and its length is ${display.longestLength}`)
  