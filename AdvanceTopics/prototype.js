//creating prototype in object
let herores =["thor","ironman","spiderman"]
let heroobj ={
    thor :"hammer",
    ironman :"suit",
    spiderman :"web",

    getspidermanpower : function(){
        console.log(`spidey power is ${this.spiderman}`)
    }
}

Object.prototype.harsh = function(){
    console.log(`harsh is present in all object prototype`)
}

heroobj.harsh();
herores.harsh();

//conclusion: prototype is used to add new properties and methods to an existing object constructor. All the objects created from that constructor will have access to the new properties and methods added to the prototype. In this example, we added a method 'harsh' to the Object prototype, which is then accessible by both 'heroobj' and 'herores'.
// all things are object in javascript so we can add prototype to all the objects.
// array , strings ,functions ======> objects ====> null ...... this  is the prototype chain in javascript


//==============================================================================================+++++++++++++++++
//prototypal inheritance in js
let user = {
    username :"harsh",
    email :"harsh@gmail.com"
}
let teacher = {
    teach :"javascript",
    price : "free of cost"
}
let TAsupport = {
    isAvailable : true,
    haveKnowledge : true
}

// old way of doing prototypal inheritance
teacher.__proto__ = user //teacher object is inheriting from user object
TAsupport.__proto__ = teacher //TAsupport object is inheriting from teacher object

//mordern way 
Object.setPrototypeOf(teacher,user) //teacher object is inheriting from user object