const userRegister ={  //inside the curlybrances is our current context and to acces the value from the current contest we use the this keyword
    userName:"pallavi",
    price:567,
    welcomeMessage : function(){
        console.log(`${this.userName} ,welcome to website`);
        console.log("this",this);
        
    }
}

// userRegister.welcomeMessage();
// userRegister.userName="nilesh"
// userRegister.welcomeMessage();
//console.log("this",this);
 //this is empty here but inside the insepect mode the value of this is windows


 function one(){
    let username = "pallavi"
    console.log(this.username); //here this is use in the objects only context only not in a functions
    
 }
 one() 
 const Two = function(){
    let username = "pallavi"
    console.log(this.username); //here this is use in the objects only context only not in a functions
    
 }
 Two() 
 const two = () => {
    let username = "pallavi"
    console.log(this.username); //here this is use in the objects only context only not in a functions
    
 }
 two() 


//  const addTwo = (num1, num2) =>{  //Explicite arrow  function when we have to write the return explicitly
//     return num1 + num2
//  }

 const addTwo = (num1, num2) => ( num1 + num2) //this is the implicite return when you dont need to write the return and you have only one ine of code to write


 console.log(addTwo(4,6));
 

 