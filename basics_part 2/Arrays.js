// // Arrays in js and diffrent way to create arrays in js
// const arr = [1,2,2,3,4,5]
// console.log(arr[3])

// const arr2 = new Array(1,2,3,4,5)
// console.log(arr2[3])

// const arr3 = new Array(5)
// arr3[0] = 1
// arr3[1] = 2
// arr3[2] = 3
// arr3[3] = 4
// arr3[4] = 5
// console.log(arr3)

// //Array methods
// //to add element in last array using push method
// const arr = [0,1,2,3,4,5]
// console.log(arr)
// arr.push(6)
// console.log(arr)

// //to remove last element from array using pop method
// arr.pop()
// console.log(arr)

// //to add element in first array using unshift method
// arr.unshift(-1)
// console.log(arr)

// //to remove first element from array using shift method
// arr.shift()
// console.log(arr)

// console.log(arr.includes(10))
// console.log(arr.indexOf(2))

// // array to string
// const newarr = arr.toString()
// newarr = arr.join()
// console.log(newarr)

// slice and splice method in array
// slice methods
// console.log( "original array : " ,arr)
// const arrn1 = arr.slice(1,3)  //slice method will not change the original array and return the new array with sliced element
// console.log("A after slice :" , arrn1)

// // splice method
// const arrn2 =arr.splice(1,3) //splice method will change the original array and return the removed element in new array
// console.log("A after splice :" , arrn2) 
// console.log("original array after splice :" , arr)

// Merging two arrays 
// first way to merge two arrays is using push method (not recommended)
//  let  num = [1,2,3]
//  let alphabet =['a','b','c']
//  num.push(alphabet)
//  console.log(num)

//  // second way to merge two arrays is using concat method (recommended)
//  let mix = num.concat(alphabet)
//  console.log(mix)

//  // third way to merge two arrays is using spread operator (recommended)
//  let mix2 = [...num , ...alphabet]
//  console.log(mix2)


// // flat method in array
// let nestedarr = [1,2,3,[4,5,6],7,8,[4,5,[6,7]]]
// let flatrr =nestedarr.flat(Infinity)
// console.log(flatrr)

//array from multiple variables and thier values
let score1= 100
let score2 = 200
let score3 = 300
let scores = Array.of(score1,score2,score3)
console.log( "array of scores : ",scores)
