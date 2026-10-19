function setusername(username){
    this.username = username
    console.log("called");
}
function createUser(username,email,password){
    setusername.call(this,username)
    this.password = password
    this.email = email
} 
const harsh = new createUser("harsh","harsh@gmail.com",1345)
console.log(harsh);
