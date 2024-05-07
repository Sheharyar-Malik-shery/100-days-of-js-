function charoccurance(str,char){
    let charcount = 0;
    let newstr = str.toLowerCase()
    console.log(newstr)
    for(let i = 0; i < newstr.length; i++){
        if(newstr[i] == char){
            charcount++
        }
    }
    console.log(charcount)
}
charoccurance("hayyyY you Your","y")