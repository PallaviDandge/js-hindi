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

// +++++++++++++++++++++++++++++++++++++++

//Memory has 2 types 
//1 stack (Premitive) -> premitive eans its return the copy of the variable 
//2 Heap (Non Premitive ) -> its return the reference means the changes will get refelect intob the original place or memory

let MyYoutubeName = "code with Pallavi"

let anotherName = MyYoutubeName
console.log(anotherName);

anotherName = "chai au code"
console.log(anotherName);
console.log(MyYoutubeName);

let userOne ={
    email:"pdandge@gmail.com",
    upi:"pbd@ybl"
}

let userTwo = userOne;

userTwo.email = "user2@gmail.com"
console.log(userOne)
console.log(userTwo)