function makeCamelCaseStr(str) {
  let newstr = str.split(" ");
  let camelcase = "";
  for (let i = 0; i < newstr.length; i++) {
    if (i === 0) {
      camelcase += newstr[i].toLowerCase();
    } else {
      let word = newstr[i][0].toUpperCase();
      let str2 = newstr[i].slice(1);
      camelcase += word + str2;
    }
  }
  return camelcase;
}

console.log(makeCamelCaseStr("How are you"));
