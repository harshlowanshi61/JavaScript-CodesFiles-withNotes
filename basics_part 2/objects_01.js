//object  declaration
const user = {
    name:"harsh",
    age: 21,
    email : "harshlo1c@gmail.com",
    isLoggedIn :true
}
// console.log(user.name)
// console.log(user["name"])

//symbol in objests
const mySym = Symbol("key1")
const userTwo ={
    name:"harsh lowanshi",
    [mySym] :"myKey1"
}
// console.log(userTwo[mySym])
// console.log(typeof mySym)


//function in objects
// userTwo.greetings= function(){
// console.log("hello harsh")
// }
// console.log(userTwo.greetings) // this will print only the function refrence , the function will not be executed
// console.log(userTwo.greetings()) // this will execute the function and print the message

//THIS keyword in objects
// const myinfo ={
//     name :"rakesh",
//     age:41,
//     email :"rakesh@gmail.com"
// }
// myinfo.greeting = function(){
//     console.log("hello rakesh")
// }

// myinfo.greetingTwo = function(){
//     console.log(`my name is ,${this.name} and my email is ,${this.email}`)
// }
// console.log(myinfo.greeting())
// console.log(myinfo.greetingTwo())


// object into object
const regularUser ={
    email :"some@gmail.com",
    fullname : {
        username :{
            firstname :"harsh",
            lastname :"lowanshi"
        }
    }
}
console.log(regularUser.fullname.username.firstname)

//merging two objects
const obj1 = {1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)

//second way to merge two objects is using spread operator
const obj4 = {...obj1,...obj2}
console.log(obj4)

//method of objects
const tinderuser = {
    name : "harsh",
    id : 12,
    email : "harsh@gmail.com"
}
console.log(Object.keys(tinderuser)) // this will return the keys of the object in array
console.log(Object.values(tinderuser)) // this will return the values of the object in array
console.log(Object.entries(tinderuser)) // this will return the key value pair of the object in array of arrays
console.log(tinderuser.email)


//deconstructing objects
const course = {
    cousrsename :"js in hindi",
    price : 999,
    courseinstructor : "hitesh"
}

const {cousrsename } = course 
console.log(cousrsename) // this will print the value of cousrsename key in course object

const {courseinstructor : instructor} = course 
console.log(instructor) // this will print the value of courseinstructor key in course object and we have renamed it to instructor