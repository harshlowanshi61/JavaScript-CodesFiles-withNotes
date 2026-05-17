function one(){
    const username = "harsh"
    function tw(){
        const website ="harsh.com"
        console.log(username) // username is accessible here because it is in the scope of function one() which is the parent function of tw()
    }
    // console.log(website) //run this first // website is not defined because it is in the scope of function tw()
    tw()
}
one()

//function hoisting 
console.log(addone(5)) // this will work because function declarations are hoisted to the top of their scope, so the function addone is available before it is defined in the code
function addone(num){
    return num + 1
}

console.log(addtwo(5)) // this will not work because function expressions are not hoisted, so the variable addtwo is not defined before it is assigned a function expression in the code
const addtwo = function(num){
    return num + 2
}