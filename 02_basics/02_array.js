const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// marvel_heros.push(dc_heros[0])

 console.log(dc_heros);

// const allHeros = marvel_heros.concat(dc_heros) //its return the new array and insted of adding the full add the elemnts only 
// console.log(marvel_heros);

// console.log(allHeros);

//spread operator

const all_new_heros = [...marvel_heros ,...dc_heros]
console.log(all_new_heros);



const anotherArray = [1,2,3,[3,6,7],6,4,[5,8,9,[2,1,5]]]
const newArray = anotherArray.flat(1)
console.log(newArray);


const obj = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(obj);
console.log(jsonString);  // '{"name":"Alice","age":25}'

console.log(Array.isArray("Pallavi")) //false

console.log(Array.from("Pallavi")) //convert it into the array
console.log(Array.from({name:"Pallavi"})) //it return the empty array need to tell that array should be of keys or values

let score1 =100
let score2 =200
let score3 = 300

console.log(Array.of(score1,score2,score3))  //convert into the array