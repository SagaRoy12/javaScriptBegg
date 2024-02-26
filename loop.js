const prompt = require ("prompt-sync")()
// let value = 1
// let number = prompt("enter the value of number")
// number = Number.parseInt(number)
// for(let i =1; i<number; i++){
//     value += (i*value)
   
// }
// console.log(value)

//for in loop for objects
let data={
    sagar: 45,
    raj: 55,
    Isha: 100
}
for (let i in data){
    console.log("the person " + i + " have " + data[i] )
}
