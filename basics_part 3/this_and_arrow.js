// const user = {
//     name : "harsh",
//     price : 999,
//     welcomeMessage :function(){
//         console.log(`${this.name} , welcome to the website`) // this will refer to the user object because it is called as a method of the user object
//         console.log(this) // this will refer to the user object because it is called as a method of the user object
//     }
// }
// user.welcomeMessage()
// user.name = "john"
// user.welcomeMessage()
// console.log(this) 

// arrow function does not have its own this keyword, it inherits the this keyword from the parent scope
function userthree (){
    let username = "harsh"
    console.log(this.username) // this will refer to the global object because it is called as a regular function
}

//arrow function
const userfour = () => {
    let username = "harsh"
    console.log(this.username) // this will refer to the global object because it is called as a regular function, arrow function does not have its own this keyword, it inherits the this keyword from the parent scope
}