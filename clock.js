function clock(){
    const now = new Date();
    let Hour = now.getHours(); 
    let Minute = now.getMinutes().toString().padStart(2 , '0');
    let Second = now.getSeconds().toString().padStart(2 , '0');

	let ampm = Hour>=12 ? 'PM' :'AM';
	let formatting = Hour%12 || 12 ;

	console.clear();
	console.log(`${formatting}:${Minute}:${Second}${ampm}`);
	setTimeout(clock , 1000);
   }
clock(); 	

// Date() is a pre defined constructor in javascript to work with date on system

/* now.getHours() pre defiined functiion to get the hour from the system and 'now' is used
for date indication  object*/

/*.toString() is used to convert the minutes to string value for printing*/

/*.padStart(padlength , 'pad first value') that pads a string with a given character to reach a specific length.  
It's often used for formatting purposes, like ensuring consistent string lengths or adding leading zeros to numbers.*/

/* console.clear() function helps to clear the terminal before printing*/

/*setTimeout() is used to run the code after a specific time interval*/