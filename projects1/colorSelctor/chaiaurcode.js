const allbuttons = document.querySelectorAll(".button")
const wholebody = document.querySelector("body")
allbuttons.forEach((button) =>{
    button.addEventListener('click',(e) =>{    // e = mouse event
        if(e.target.id === 'grey'){            // e.target = the element that triggered the event 
            wholebody.style.backgroundColor = e.target.id
        }
         if(e.target.id === 'white'){           // e.target.id = the id of the element that triggered the event
            wholebody.style.backgroundColor = e.target.id
        }
         if(e.target.id === 'blue'){
            wholebody.style.backgroundColor = e.target.id
        }
         if(e.target.id === 'yellow'){
            wholebody.style.backgroundColor = e.target.id
        }
    })
})