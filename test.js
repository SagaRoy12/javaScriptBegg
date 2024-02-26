function sum (num1 , num2, functionTocall){
    let result = num1+num2
    functionTocall(result);  
}
function displayResult(data){
    console.log("The result of the sum is " + data);    
}
function displayResultPassive(data){
    console.log("the result of sum is " + data);
}

let output = sum( 2 , 3 , displayResult);
