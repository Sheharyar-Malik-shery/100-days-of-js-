
function TriangleType(length1,length2,legth3){
let type = "";
if(length1==length2 && length2==length1){
    type = "Equilateral"
}else if(length1==length2 || length1 == legth3 || length2==legth3){
   type = "isoscales"
}else{
    type= "Scalene"
}
return type
}

console.log(TriangleType(3,2,3))
console.log(TriangleType(3,3,3))
console.log(TriangleType(3,4,5))
