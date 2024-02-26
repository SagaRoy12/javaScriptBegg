/*/ basic syntax for strings
// to calculate the length of the string
/*function calculateLength(str){
    const len = str.length;
    return len;
}

let test = "Sagar Roy"
console.log(calculateLength(test))*/

//to get the index using string.indexOf("argument") for first index 
// if it appears twice in the string then string.lastIndexOf("argument")

/*function getIndex(strings , target){
    console.log("the original string is :- " + strings)
    console.log("the target string is :- " + target)
    let firstIndexIs = strings.indexOf(target)
    console.log("the  starting indx of " + target +  "in the given string " + firstIndexIs)
    let lastIndexIs = strings.lastIndexOf(target)
    console.log("the  ending indx of " + target +  "in the given string " + lastIndexIs)
}

let testString = "hello sagar this this is Node"
getIndex(testString , "this");*/

// function to slice the string with string.slice(startIndex , endingIndex)

/*function sliceString(strings , startIndex , endingIndex){
    console.log("the main string is " + strings)
    console.log("after slicing the index is " + strings.slice(startIndex , endingIndex))
}
const testString = "hello sagar "
sliceString(testString , 0 , 3)*/

// replace the string using string.replace(target , replace) function

/*function replacement (str , tar , newString){
    console.log("the origiinal string is " + str)
    console.log("the target is  " + tar)
    console.log("after replacement the new string is " + str.replace(tar , newString))

}

const testString = "isha does not love sagar "
replacement(testString , "does not " , " ")*/


//splitting the string using string.split(saperator)

/*function splitting(str , saperator){
    console.log("the original string before splitting is :- " + str )
    console.log("the string after splitting is :- " + str.split(saperator))
 }

 const testString = "hello sagar"
 splitting(testString, " ")*/

 // to trim the string extra space  using string.trim() function
  
 /*function trimming(str){
    console.log("the dtring before trimming :- " , str)
    console.log("the string after trimming :- " , str.trim())
 }

let testString = "   hello sagar   "
 trimming(testString)*/

// to convert the string to upper case using string.toUpperCase()
/*
function toUpper(str){
    console.log("string before converting to upper case :- " , str)
    console.log("string after converting in to uppercase :- ", str.toUpperCase())
}

const testString = "hello sagar this is javascript"
toUpper(testString)
*/

// to convert the string in lower case 

/*function toLower(str){
    console.log("this the string before conversion ", str)
    console.log("this the string after conversion" , str.toLowerCase(str))
}

const testString = "HELLO SAGAR THIS IS JAVASCRIPT"
toLower(testString)*/