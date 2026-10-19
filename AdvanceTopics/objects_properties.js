const give = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(give)

// defineproperty
const chai = {
    name:"harsh",
    price:55,
    available:true
}
// console.log(Object.getOwnPropertyDescriptor(chai,'name'));
console.log(Object.defineProperty(chai,'name',{
    writable : false,
    enumerable : false
}))
// console.log(Object.getOwnPropertyDescriptor(chai,'name'));


//to iterate objects
for (let [key,value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`)  // for this change value of enumerable 
}