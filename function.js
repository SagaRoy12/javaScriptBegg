// call back function

/*function calculate(a , b , fun){
    let result = (a,b);
    return result;
}

function sum(a, b){
    let output = a+b;
    console.log(output);
}
function sub(a,b){
    let out = a-b;
    console.log(out)
}
calculate(1,2, sub)*/

// setTimeout function that allows the code to run after a mentioned time interval

/*function greet(){
    console.log("hello and welcome to time out function")
}

setTimeout(greet , 5*1000)*/

// setInterval is a function that runs after the given intervl time 

/*function greet(){
    console.log("hello and welcome to time out function")
}

setInterval(greet , 5*1000)*/

// code for turminal code
function displayTime() {
    const now = new Date();
    const hours = now.getHours();// get the hour from the machine
    const minutes = now.getMinutes().toString().padStart(2, '0');// get the min from the machine
    const seconds = now.getSeconds().toString().padStart(2, '0');// get the second from the machine
    // toString is used to convert the value into a string
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Adjust for 12-hour format
  
    console.clear(); // Clear the terminal before printing
    console.log(`${formattedHours}:${minutes}:${seconds} ${amPm}`);
  
    setTimeout(displayTime, 1000); // Update every second
  }
  
  displayTime(); // Start the clock
  
