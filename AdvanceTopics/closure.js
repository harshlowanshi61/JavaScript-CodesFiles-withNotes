function makefun(){
    const name = "harsh";
    function displayname(){
        console.log(name)
    }
    return displayname
}
const myfu = makefun()
myfu()
