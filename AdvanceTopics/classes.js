// class user {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeToUpperCase(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("harsh","harsh@harsh.com",2005)
// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changeToUpperCase());


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//inheritance with classes
class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

const displayuser = new user("harsh")
displayuser.logMe()
console.log(displayuser);

class teacher extends user{   //extends is used for inheritance
    constructor(username,password,email){
        super(username)                   //super keyword work same as call keyword in function
        this.password=password
        this.email = email
    }
}

const teachers = new teacher("janvi mam","janvi2gmail.com",134)
console.log(teachers);


