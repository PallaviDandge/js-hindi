//arrys

const myArr = [0,2,3,4,5,6,6]

const myHero = ['abc' ,'efg','hij']

const myArr2 = new Array(1,23,4,6,7,8)
console.log(myArr[0]);


//Array Method

// myArr.push(3)
// myArr.push(8)
// myArr.pop() //remove the last value from te array
//myArr.unshift(9)  //its insert the value in the start of the array 
//myArr.shift() //remov the 1st element of array

// console.log(myArr.includes(9)) //its return false because include only return boolen if thr value is present its return true if not its returns false
// console.log(myArr.indexOf(9)) // its return -1 because the 9 does not exist in the array 
// console.log(myArr.indexOf(3)) 


const newArr = myArr.join()
console.log(typeof newArr);

// console.log(myArr);


//slice ,splice
console.log("A",myArr)

const mySlice = myArr.slice(1,3) //it dont change the original array its return the 1 index to 2 index value does not take the 3 index value
console.log("b",myArr)
console.log(mySlice);

const mySplice = myArr.splice(1,3) //in splice when we apply splice method on the array its change the original array means the index we have given to the paramter its remove those index value from original array and return that remove value as the output of the splice
console.log("c",myArr)
console.log(mySplice); 







