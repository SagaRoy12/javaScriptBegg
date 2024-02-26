class employee { // emplyoee is the class name or a blueprint that everyone could have common
    constructor(name , salary , id){ // constructor holds the attributes for the class 
        this.name= name // asigning the attributes with the constructor with this function
        this.salary= salary
        this.id= id
    }

    static oath(){ // it is the method associated to the class itself in dependent of objects
        console.log("i take the oath for the company")
    }

    commonWord(){           // it is the behaviour of the class we can declare multiple methods for this 
        console.log(this.name ," is the member of that company")
    }
}
console.log(employee.oath())// it can be caled directly to by using calss name no need of object instance 
const raj = new employee ("raj" , 56000, "khandra") // creating objects using the class properties
const roy = new employee ("roy" , 57000, "khandra")
raj.commonWord() // calling the commonWord function for raj object
console.log(raj.name) // printing name of raj object 