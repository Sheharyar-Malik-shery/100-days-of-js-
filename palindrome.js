

function palindrome(str){
    let newstr = str.toString().toLowerCase().split(" ")
    let removespaces = "";
    let reversestr = ""
    for(let word of newstr){
       removespaces += word
    }
    for(let i=removespaces.length-1; i>=0; i--){
      reversestr +=removespaces[i]
    }

    if(removespaces === reversestr){
      console.log(`The string ${str} is palindrome`)
    }else{
      console.log(`The string ${str} is palindrome `)
    }

}
palindrome("racecar racecar")