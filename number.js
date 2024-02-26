// conversion of the string to a integer value

/*function stringToInteger(str){
    console.log("the data before conversion " ,str)
    console.log("the data after conversion " ,parseInt(str))
}

const testData = "42sdkjhfsdifhoi" 
const testData2 = "3.145" 

stringToInteger(testData)
stringToInteger(testData2)*/


// string to float type data
function explainParseFloat(value) {
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result);
  }
  
  // Example Usage for parseFloat
  explainParseFloat("3.14");
  explainParseFloat("42");
  explainParseFloat("42px");