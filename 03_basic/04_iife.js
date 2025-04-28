//Immediately Invoke Function Expression (IIFE)


(function One(){ //this is the named iief
    console.log('DB CONNECTED');
})();  //now here if i dont use the semicolan its give me an error beacuse i am making two functions as iife

(() => {
    console.log('DB CONNECTED Two');
})();

((name) => {
    console.log(`DB CONNECTED Two ${name}`);
})("pallavi");

//()() =>the first paramthisis is the defination of the function and the second paranthisi is the executio of the function
// One()
