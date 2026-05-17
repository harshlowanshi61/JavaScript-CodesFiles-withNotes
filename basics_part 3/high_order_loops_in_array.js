// for of 
let arr = [1,2,3,44,5]
for (const value of arr) {
    // console.log(value)
}
const greetings = "hello harsh "
for (const greet of greetings) {
    // console.log(greet)
}



// Maps 
const mapping = new Map()
mapping.set('IN',"India")
mapping.set('US',"United America")
mapping.set('Fr',"France")
// console.log(mapping)



//for of loop in map
for(const key of mapping){
    // console.log(key) // it will give us key and value in array form
}

for(const [key,value] of mapping){
    // console.log(key,':-',value) //
}



//for in loops 
const myobj = {
    js :"javascript",
    cpp:"c++",
    py:"python"
}
for (const key in myobj) {
//     console.log(key) // it will give us only key
// }
for (const key in myobj) {
    // console.log(`${key} : ${myobj[key]}`) // it will give us key and value both
}




//for each loop
const lang = ["javascript"]
// lang.forEach((val) =>  {
//     console.log(val)
// })}

lang.forEach( function (val) {
    // console.log(val)
})}



//For each loop in objects of array
const mycoding = [
    {
        name :"javascript",
        filename :"js"
    },
    {
        name:"python",
        filename:"py"
    }
]
mycoding.forEach((item) =>{
    console.log(item.name)
})