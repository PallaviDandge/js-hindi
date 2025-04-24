//scope
let a = 10
// const b=20
 //var c = 300

//global scope value are accessable in the block scope but block scope value does not allow in the global scope
if(true){  
    let a = 10
    const b=20
    var c = 30
}
//  console.log(a);
// // console.log(b);
// console.log(c);



function one(){
    const username = "pallavi"
    function two(){
        const website = "youtube"
        console.log("username",username);
        
    }
    // console.log("website",website);
    two()
}

one()

console.log(addOne(5))

function addOne(num){  //here we have just declare the function
return num + 1
} 


const addTwo = function(num){ //but in this here we have declare the variable as well store that function in a variable its called hoisting
    return num +2
}

console.log(addTwo(3))
