(function (){
    console.log(`DB connnected successfully`)
}) (); // IIFE - Immediately Invoked Function Expression
//syntax 
// (function) (call function) ;end function

(() =>{
    console.log(`DB connnected successfully using arrow function`)
}) ();

// important thing awlays use semicolon before IIFE to avoid any error in case of previous code is not ended with semicolon