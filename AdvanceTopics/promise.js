//To create a promise
//by holding in variable

// const res = require("express/lib/response");

// //this is a promise which is created by using new keyword and Promise constructor
// const PromiseOne = new Promise(function(resolve,reject){
//                     // Do async task like = Db calls , network calls , cryptography
//                     setTimeout(function(){
//                     console.log("hii harsh");
//                     resolve() //if everything is fine then resolve will be called
                        
//                     },3000)

// })
//To consume the promise meaning to get the result of promise
//consume means to get the result of promise
// PromiseOne.then(function(){
//     console.log("Promise resolved");
// })

//====================================================================================================================
// another way to create a promise without holding in variable
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//     console.log("hii janvi");
//     resolve()
//     },4000)
    
// }).then(function(){
//     console.log("Promise 2 completed");
    
// })

//===================================================================================================================
//to pass data from resolve()
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("harsh");
//         resolve({username:"janvi",age:21,email:"h@gmail.com"})
//     },1000)
// }).then(function(user){
//     console.log(user);
    
// })


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//using both parameters resolve and reject
// const promisefour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error){ //if error is false then resolve will be called
//         console.log("harsh");
//         resolve({username:"harshlo1c",age :21,email:"h@gmail..com"})
//         }
//         else{//if error is true then reject will be called
//         reject('ERROR : Something went wrong')
//         }
//     },1000)
// })
// promisefour.then((user)=>{ 
//     console.log(user);
//     return user.username;
    
// }).then((username)=>{ 
//     console.log(username);
// }
// ).catch((error)=>{
// console.log(error);
// }).finally(()=>{
//     console.log("the promise is either resolved or rejected"); 
// }
// )

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//using async and await
const promiseFive = new Promise(function(resolve,reject){
        setInterval(()=>{
            let error = false;
        if(!error){
            resolve({username:"rakesh",age:44,email:"rakesh@gmail.com"
            })
        }
        else {
            reject("Error :Giving error")
        }
        },1000)
})

async function consumepromiseFive(){ // async function is used to declare a function as asynchronous
try {
       const response = await promiseFive // await is used to wait for the promise to resolve or reject
       console.log(response);
       console.log("successfully")
} 
catch (error) {
    console.log(error);
    
}}

consumepromiseFive() //calling the async function


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//calling random api using fetch and async await
//fetch is used to make network calls
//fetch is a built-in function in javascript which is used to make network calls
// async function getuserdata(){ 
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//     } catch (error){
//         console.log(error);
//     }
// }
// getuserdata() //calling the async function to get data from api

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//fetch using then and catch
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return  response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("ERROR");
    
})