//constructor function = new keyword
function user(username,logincount,isloggedin){ //constructor function is used to create objects
    this.username = username //this is used to refer to the current object
    this.logincount = logincount
    this.isloggedin = isloggedin
    this.greet = function(){
        console.log(`Hello ${this.username}`);
    }
     return this  //this is not necessary but it is used to return the current object
}
const userone = new user("harsh",22,true) //new keyword is used to create a new object from the constructor function
console.log(userone);
userone.greet() //greet method is called on the object userone;
const usertwo = new user("janvi",27,false)
usertwo.greet() //greet method is called on the object usertwo;
console.log(usertwo);