

function sayMyName(){
    console.log('P');
console.log('A');
console.log('L');
console.log('L');
console.log('A');
console.log('V');
console.log('I');

}
sayMyName()

function add(num1,num2) //=> this are parameter
{
return (num1+num2)
}

const a = add(4,5) //=> this are argumets
console.log(a)

function loginUserMessage( username){
    // if(username === undefined)
    // {
    //     console.log("please enter a username");
    //     return
        
    // }
    if(!username)
        {
            console.log("please enter a username");
            return
            
        }
    return `${username} just login`
}

const loginuser = loginUserMessage()
console.log(loginuser);


function calculateCartPrice(...num1){ //->rest operatore combine all 3 value into array paasing ultiple value
    return  num1
}

console.log(calculateCartPrice(100 ,200,300));
//o/p [100,200,300]


const user = {
    username:"pallavi",
    price:199

}

function handleObject(anyobj){
    console.log(`UserName is ${anyobj.username} and price is ${anyobj.price}`);
    
}

handleObject(user)

handleObject({
    userName:"samntha",
    price:67
})

const myNewArray = [200,300,500]

function returnSecondValue(getArray){
return getArray[1]
}

console.log(returnSecondValue(myNewArray));
