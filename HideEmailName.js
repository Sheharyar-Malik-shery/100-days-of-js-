function EmailSecure(emil) {
  let newemil = "";
  let position = 0;
  for (let i = 0; i < emil.length; i++) {
    if (i < 4) {
      newemil += emil[i];
    } else {
      if (emil[i] !== "@") {
        newemil += "*";
      } else if (emil[i] === "@") {
        position = emil.indexOf(emil[i]);
        console.log(position);
      }
    }
  }
  for (let j = position; j < emil.length; j++) {
    newemil += emil[j];
  }
  return newemil;
}

console.log(EmailSecure("sheharyarmlaik@gmail.com"));

//Solution no 02

// function EmailSecure(email) {
//   let atIndex = email.indexOf("@");
//   if (atIndex === -1) return email; // Handle case where '@' is not found

//   let localPart = email.slice(0, atIndex);
//   let domainPart = email.slice(atIndex);
//   // Mask characters after the first 4 characters of the local part
//   if (localPart.length > 4) {
//     localPart = localPart.slice(0, 4) + "*".repeat(localPart.length - 4);
//   }
//   return localPart + domainPart;
// }

// console.log(EmailSecure("sheharyarmlaik@gmail.com")); // Output: sheh*****@gmail.com
