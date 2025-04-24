//singletone

// const tinderUser2 = new Object() //singletone object
// console.log(tinderUser2);

const tinderUser = {} //non singletone object

tinderUser.id = "123"
tinderUser.name = "nilesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email : "some@gmail.com",
    fullName :{
        usersFullName:{
            firstName:"Pallavi",
            lastName:"Dandge"
        }
    }
}

// console.log(regularUser.fullName.usersFullName);

const obj1 ={
    arr:
[    1,
    2,
    3]
}
const obj2 ={
    4:"a",
    5:"b",
    6:"c"
}
const obj3 ={
    7:"d", 8:"e"
}

const obj4 = Object.assign({}, obj1 ,obj2 ,obj3) ; //this empty object is the target another obj are sourse it means all the source are going in to the target
 obj4.obj1 = "ijk";
// const obj3 = {...obj1 , ...obj2}

//  console.log("obj4",obj4);
// console.log("obj1",obj1)

 const users = [{
    id:1,
    email:"h@gmail.com",
 },
 {
    id:2,
    email:"p@gmail.com",
 },
 {
    id:3,
    email:"n@gmail.com",
 }
]
 
// console.log(users[1].email)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //each key value get converted into the array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const tryDeep = JSON.parse(JSON.stringify(obj1))
// console.log(tryDeep);
tryDeep.arr[2] = 12345

const tryShallow = Object.assign({},obj1)
tryShallow.arr[2] =2234
// console.log(tryShallow)

// console.log(obj1)


//*** object destructring ***/

const course ={
    courseName: "javascript",
    price:"234567",
    courseInstructor:"pallavi"
}

//syntax for destructoring

const {courseInstructor} = course
console.log(courseInstructor);

// React destructoring
// const navbar = ({
//     company
// }) =>{

// }

// navbar(company = "pallavi")


// jason is not a object but its similar to the object in object we store that in a varivble json also has the key and value but key also show in the " "


[
    {},{}
]