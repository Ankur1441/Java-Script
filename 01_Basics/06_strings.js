let name = "Vaibhav"
let repoCount = 50

// console.log(name + repoCount + " value");
console.log(`Hello My Name is ${name} And My RepoCount is ${repoCount}`);

const gameName = new String("Professor")

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('f'));

const newString = gameName.substring(0,4)
console.log(newString);

const secondString = gameName.slice(-9,9)
console.log(secondString);

const newStringOne = "       professor          "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://orange-space-xylophone-4xg77g9vw4w3j5pp.github.dev/"
console.log(url.replaceAll('-', '@'));
console.log(url.includes('orange'));

console.log(url.split('-'));









