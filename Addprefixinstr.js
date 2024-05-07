//add Hash And Capitalize each word first letter

const addHashAndCapitalize = (str) => {
    const words = str.trim().split(" ");
    let result = "#"; // Initialize result with the "#" prefix
  
    for (let i = 0; i < words.length; i++) {
      const firstLetter = words[i][0].toUpperCase(); // Capitalize the first letter
      const remainingLetters = words[i].slice(1); // Get the remaining letters
      result += firstLetter + remainingLetters; // Concatenate the capitalized word
    }
  
    return result;
  };
  
  const word = addHashAndCapitalize("hay how are you");
  console.log(word);
  