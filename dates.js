const currentInfo = new Date();
console.log(Date())
const hours = currentInfo.getHours();
const minutes = currentInfo.getMinutes();
const second = currentInfo.getSeconds();

console.log(`${hours} ${minutes} ${second}`)

/* to get the Epoch: This refers to a specific point in time used as a reference for 
measuring elapsed time. In JavaScript, the epoch is set to 
January 1, 1970, 00:00:00 UTC (Coordinated Universal Time).
Milliseconds: The return value of getTime is expressed in milliseconds, 
which are units of one-thousandth of a second.*/

console.log(currentInfo.getTime())// to get the current time

