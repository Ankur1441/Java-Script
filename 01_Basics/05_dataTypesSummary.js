// //  Premitive dataType

// // 7 Types : String , Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outSideTemp = null
// let userEmail;


// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId);


// const bigNumber = 36547623235373242n


// // Reference (Non-Premitive)

// // Array, Objects, Functions

// const heroes = ["shaktiman", "mack", "rahul"]

// let myObj = {
//     name : "naman",
//     age : 23,
// }

// const myFunction = function(){
//     console.log("Hello World");    
// }

// console.log(typeof score)
// console.log(typeof scoreValue)
// console.log(typeof isLoggedIn)
// console.log(typeof outSideTemp)
// console.log(typeof userEmail)
// console.log(typeof id)
// console.log(typeof bigNumber)
// console.log(typeof heroes)
// console.log(typeof myFunction)

// ************************************************************************************

// stack (Primitive), Heap (Non-Primitive)
 
let myName = "Harry"
let anotherName = myName
anotherName = "mack"
console.log(myName)
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "mack@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);