//filter
//filter return values that satisfy the condition in the callback function
const mynums = [1,2,3,4,5,6,7,8,9,10]
const nums = mynums.filter((value) => value > 5) 
// console.log(nums)

//map
const arrnum = [1,2,3,4,56,7,8,9,10]
const newarr = arrnum.map( (num) => num + 10)
// console.log(newarr)

//chaining 
const chainarr = arrnum.map( (num)=> num*10)
                .map((num)=> num + 1)
                .filter( (num)=> num >=40)
// console.log(chainarr)



// Reduce 
const array = [ 1,2,3,4 ]
// const reducearr = array.reduce(function (acc,currval) {
//     return acc + currval
// } , 0) // 0 is the initial value of accumulator
// console.log(reducearr)

//reduce using arrow function
const reducearr = array.reduce((acc,currval ) => acc + currval ,0 )
console.log(reducearr)