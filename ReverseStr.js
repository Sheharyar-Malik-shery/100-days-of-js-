// Reverse the string without using built-in methods

function Reversestr(str) {
  let newstr = " ";
  for (let i = str.length - 1; i >= 0; i--) {
    newstr += str[i];
  }
  return newstr;
}
console.log(Reversestr("Hello how are you"));
