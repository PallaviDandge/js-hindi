// // const userEmail = "p@gmail.com"
// const userEmail =[]

// if(userEmail){
//     console.log("Got user Email");
    
// }else{
// console.log("dont got user email");

// }

// //falsy values -> false , 0 , -0 , bigInt(0n) , "" ,null,undefined,NAN(Not a Number)
// //truthy values -> true , "0" ,  "false" , " " , [],{},function(){},

// if(userEmail.length === 0){
//     console.log("array is empty");
    
// }


// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0){

//     console.log("object is empty");
    

// }

// const obj1  = {
//     1:"pallavi",
//     2:"Nilesh"
// }

// Object.keys()



// const arr = [1,3,4,6,8]
// const str = "pallavi"
// console.log("array", arr.length);
// console.log("string", str.length);

// const input = "I love my husband a lot"

// const newInput = input.split(' ');
// console.log(newInput);
// console.log(newInput.length);
// for(i = newInput.length -1; i >= 0; i--){

// console.log("new Input" ,newInput[i]);

// }


// const input2 = "I love my husband a lot"

// const newInput2 = input.charAt(0);
// console.log(newInput2);

// console.log(newInput2.length);
// ans = ""
// for(i = input2.length -1; i >= 0; i--){
//  ans += input2.charAt(i);
// }
// console.log(ans);



// const arr = [1,5,7,4,2,2,1,4,10,32,45,67,34]

// let even = 0;
// let odd = 0;

// for(i = 0 ; i < arr.length; i++){
//     if(arr[i]%2 == 0){
//         even+= arr[i]
//     }else{
//         odd+= arr[i]
//     }
// }
// console.log(even);
// console.log(odd);

const arr2 = ["a","b","a","d","c","A","B","d","E","D","D","D","D","c","c","C","C","C","C","C","C"]

let count = 0
var ans = ""

for(i = 0; i<arr2.length; i++){
     let temp = 1
   for(j=i+1; j<arr2.length; j++){
    
        if(arr2[i].toLowerCase() == arr2[j].toLowerCase()){
             temp++;
        }
   }
   if(count <= temp){
    count = temp
    ans= arr2[i]
   }
     
}

console.log("ans",ans);

console.log("count",count);

