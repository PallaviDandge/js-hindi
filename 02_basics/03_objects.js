//singletone -> if the object is created with the constructor its is not a singletone but if the object is created with the literals it is an singletone
//object literals => type to declare the object
//Object.create -> using this method object is created using the constructor an those are the singletone

const mySymbol = Symbol("key1")
const jsUser ={
name:"pallavi",
"fullname":"Pallavi Dandge",
[mySymbol]:"myKey1",
age:"24",
location:"pune",
email:"pdandge66@gmail.com",
isLoggedIn:false,
lastLogingDays:["Monday","Tuesday"]
}

console.log(jsUser.fullname);  // we cn access this througth the .as well
console.log(jsUser["email"]);
console.log(jsUser[mySymbol]);

console.log( typeof jsUser[mySymbol]);

console.log(jsUser); //now it will show me the that the mySymbolis asymbol if you remove the brackets its will become the normal sting

jsUser.email = "gdgvjhug@gmail.com"
// console.log(jsUser);
// Object.freeze(jsUser)
jsUser.email="pbdandge@microsoft.com"
// console.log(jsUser);

jsUser.greating = function(){
    console.log("Hello users")
}
jsUser.greating2 = function(){
    console.log(`hello js user ${this.name}`)
}
console.log(jsUser.greating());
console.log(jsUser.greating2());

console.log(jsUser); 

// const array = ["a","3"]
// console.log(array[1])


