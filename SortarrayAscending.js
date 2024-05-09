//sort array in Ascending order
let Array = [9,3,4,0,1,3,5,4,6,7,2]

console.log(`Array befoe Sorting is ${Array}`)

for(let i = 0; i<Array.length; i++){
    for(let j = i+1; j<Array.length; j++){
        if(Array[i]>Array[j]){
            let temp = Array[i]
            Array[i] = Array[j]
            Array[j] = temp
        }
    }
}
console.log(`Array After Sorting in Ascending Order ${Array}`)
