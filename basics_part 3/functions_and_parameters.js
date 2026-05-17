// //function declaration
// function saymyname () {
//     console.log("harsh lowanshi")
// }
// saymyname() //function call

// //function with parameters
// function addtwonum (number1,number2) { //number1 and number2 are parameters
//     console.log(number1 + number2)
// }
// addtwonum(3,4) //function call with arguments

// //function with return statement
// function subtwonum (num1 , num2) {
//     let result = num1-num2
//     return result 
// }
// let result = subtwonum(10,5) //function call with arguments and storing the return value in a variable
// console.log(result)

// // important things to note about functions and parameters
// function loginusermessage (username) {
//     return `welcome back ${username}`
// }
// console.log(loginusermessage("harsh"))
// console.log(loginusermessage(""))
// console.log(loginusermessage())  

// //to avoid the third case issue 
// function loginusermessage (username) {
//     if(!username) { ////if username is not provided or is an empty string, it will evaluate to false and the condition will be true
//         return "please provide a username"
//     }
//     return `welcome back ${username}`
// }
// // console.log(loginusermessage("harsh"))
// console.log(loginusermessage())

// // Rest operator
// function calculateCartPrice(val1,val2,...num1){ //the rest operator allows us to pass an arbitrary number of arguments to a function and it will be stored in an array
//     return num1
// }
// console.log(calculateCartPrice(100,200,300)) //it will return an array of the arguments passed to the function

// //functions with objects
const user = {
    username :"harsh",
    price :299
}
function displayuserdetails (anyobject) { //anyobject is a parameter that can accept any object
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)
}
displayuserdetails(user)
// console.log(displayuserdetails({username:"harsh",price:399})) //we can also pass an object directly to the function without storing it in a variable first

// //functions with arrays
const mynewarray = [100,200,300]
function returnarray(anyarray){
    return anyarray[1]
}
console.log(returnarray(mynewarray))
//  console.log(returnarray([400,500,600])) //we can also pass an array directly to the function without storing it in a variable first