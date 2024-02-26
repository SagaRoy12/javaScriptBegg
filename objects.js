// array of objects
const history =[
            {   firstName : "Sagar",
                age : 22,
                gender: "male"              
            },
            {   firstName : "Vibekananda",
                age : 23,
                gender: "male" 
                
            },
            {   firstName : "Debjani",
                age : 22,
                gender: "female" 
            },
            {   firstName : "Isha",
                age : 22,
                gender: "female" 
            }
            ]
            //console.log(history[0]["gender"])
// //to print in basis of some veriable
let index = 0
//let result = []
for(index ; index<history.length; index++){
    if(history[index]["gender"]==="female"){
        console.log(history[index]["firstname"])
    }
}

