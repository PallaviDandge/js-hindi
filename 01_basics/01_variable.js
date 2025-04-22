const accountId = 1445553 
// cant be change
let accountEmail = "pbdandge666@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2  //cant cahnge
accountEmail = "pdandge8@gmail.com"
accountPassword="123"
accountCity="mumbai"   //not good way declare variable

console.log(accountId);


/*
prefer not to use var because of the issue of functional scope and block scope
*/

console.table([accountId,accountEmail,accountCity,accountState])
