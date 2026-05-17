// date and time in js
// let myDate = new Date()
// console.log(myDate)

//to string
// console.log(myDate.toString())

//to date string
// console.log(myDate.toDateString())

// to locale date string
// console.log(myDate.toLocaleDateString()) //this will give us date in our local format
// console.log(myDate.toLocaleString())    //this will give us date and time in our local format

//to create date 
// let myBirthday = new Date(2005,0,27) //month starts from 0 to 11 
// console.log(myBirthday.toDateString())

// //second way to create date
// let myBirthday2 = new Date('27 january 2005')
// console.log(myBirthday2.toDateString())

// //third way to create date
// let myBirthday3 = new Date("2005-01-27") // YYYY-MM-DD
// console.log(myBirthday3.toLocaleDateString())

// //fourth way to create date
// let myDate3= new Date("01-27-2005") // MM-DD-YYYY
// console.log(myDate3.toLocaleDateString())


// //timestamp in js
// let mytimestamp = Date.now()
// console.log(mytimestamp) //this will give us current timestamp in milliseconds

// let myDate =new Date("01-27-2005")
// console.log(myDate.getTime()) //this will give us timestamp of that date

//milisecond to second
let mytimestamp = Date.now()
console.log(Math.floor(mytimestamp/1000)) //this will give us current timestamp in seconds
console.log(Math.floor(Date.now()/1000)) //this will give us timestamp of that date in seconds
