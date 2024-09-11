// Dates

const myDate = new Date()
// console.log(myDate.toString());

// let createMyDate = new Date(2023, 0, 23)
// let createMyDate = new Date(2023, 0, 23, 5, 3, 11)
// let createMyDate = new Date("2023-01-23")
let createMyDate = new Date("01-23-2023")
// console.log(createMyDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createMyDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {weekday: "long",}));




