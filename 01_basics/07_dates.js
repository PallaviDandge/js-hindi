let myDate = new Date()
let number = 1000000
// console.log(number.toLocaleString('en-IN')); //its retirn the rs format of that perticular number
// console.log(myDate.toLocaleString('en-IN'));
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(typeof myDate);


//let createDate = new Date(2023,0,23)
//let createDate = new Date("2023,01,23")
let createDate = new Date("01-14-23")
//console.log(createDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createDate.getTime());
//console.log(Math.floor(Date.now()/1000)); //its give thedecimal value dont want that thay why we are using math.floor

let newDate = new Date()
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}) 
)

 