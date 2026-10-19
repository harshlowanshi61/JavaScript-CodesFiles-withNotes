// Getter setters using class
class user {
    constructor(username,password){
        this.username = username
        this.password = password
    }

    get password(){
        return `${this._password.toUpperCase()}harsh`
    }
    set password(value){
        this._password = value
    }
}
const harsh = new user("janvi","lowanshi")
console.log(harsh.password);

// Getters setters using function

function userTwo (username,password){
    this._username = username
    this._password = password

    Object.defineProperty(this,'password',{
        get : function(){
            return this._password.toUpperCase()
        },
        set : function(value){
            this._password = value
        }
    })

    Object.defineProperty(this,'username',{
        get:function(){
            return this._username.toUpperCase()
        },
        set : function(value){
            this._username = value
        }
    })
}

const newUser = new userTwo("harshlowanshi","janvikasture")
console.log(newUser.password);
console.log(newUser.username);

