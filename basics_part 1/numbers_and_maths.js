// let score = 400
// console.log(score)

//another way of creating number using constructor
// let mobileno = new Number(1234567890)
// console.log(mobileno)

//convert number to string
// console.log(score.toString())

//to decimal
// console.log(score.toFixed(2))

// //to fixed prototype(precise value)
// let decicmalScore = 23.899
// console.log(decicmalScore.toPrecision(1))


//to local string
// let hundred = 100000000
// console.log(hundred.toLocaleString('en-IN'))


//+++++++++++++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math.random()) //this will give us random number between 0 and 1
console.log(Math.random() * 10 + 1) //this will give us random number between 1 and 10
console.log(Math.floor(Math.random() * 10 + 1)) //this will give us random number between 1 and 10 without decimal


//imp formula
const min =10
const max = 20
console.log(Math.floor(Math.random() * (max-min +1)) +min) //this will give us random number between 10 and 20 without decimal