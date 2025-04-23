//Premitive  => has 7  and its call by value categoer
// string ,Number ,Boolean ,null ,undefined,Symbol(to make value unique),BigInt

const  id  = Symbol("100")
const  anotherId = Symbol("100")

console.log(id === anotherId);


const bigNumber  = 2345678987654321123456787655678987654321234567890987654321234567898765432n
console.log(typeof bigNumber)

// and nonPremitive(Reference Type ) -> Array ,Objects,Functions

const myArray =  ["pallavi" ,"Nilesh","Yawatkar"]

const myObj ={
    1:"pallavi",
    2:"nilesh",
    3:"yawatkar"
}


const myFunction = function (){
     console.log("My Function");
     
}
console.log(typeof myArray);

console.log(typeof myObj);

console.log(typeof myFunction);

