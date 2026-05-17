const clock = document.querySelector("#clock");
setInterval(() => {  // This function will run every 1000 milliseconds (1 second) this the work of setInterval function
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
} ,1000);