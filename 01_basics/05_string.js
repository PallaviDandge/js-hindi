const name = "pallavi"
const repoGit = 50

console.log(name + repoGit) // out dated syntax

//insted of above use backtics

console.log(`Hello my name  is ${name} and my repo cout is ${repoGit}`);

const gameName = new String('pallavi - nilesh')

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); //-> we pass the index to see which chat is at what place 
console.log(gameName.indexOf('l')); //-> at which position this char is


const newString = gameName.substring(1,5)
console.log(newString);

const newStringOne = "    Pallavi    ";
console.log(newStringOne);

console.log(newStringOne.trim())
const url = " https://glowing-space-waffle-r5gqw6547jxcpp64.github.dev/"

console.log(url.replace('-' ,'@'))
console.log(gameName.split('-')); //split converts the string into the array 






