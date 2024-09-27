// Everything about functions

function addition(x,y){
    // console.log(x+y)
    return x+y
}

// console.log(addition(10,20))

// When we declare a function then we give parameters to them while when we call the function then we give arguments to them
// Agar hum kabhi argument pas karna bholl jaye to UNDEFINED aata hai

// Now we will see whatif we dont know about range of number of parameters....

function calculateCartPrice(...num1){           // ...variable_name isi ko rest operator bhi aur spread operator bolte hai ya bas unke usecase pe depend karta hai ki kise hum kya kahenge
    return num1                                    //here ...num1 is a rest operator
}

// console.log(calculateCartPrice(10,20,30,45,"Hello"))   


// How  to pass object into function and use them 

const user = {
    username: "Happy Sharma",
    price: 999
}

function handleObject(anyObjectName){
    console.log(`Name of te user is ${anyObjectName.username} and price is ${anyObjectName.price}`)
}

// handleObject(user)   // calling the function must pass the object as argument not any object.

// **************************************** this and arrow function *****************************************

const _user = { 
    username :"Happy Sharma",
    price: 199,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`)
        // console.log(`${username}, Welcome to website`) his will show error
    }
}

// _user.welcomeMessage()
// _user.username = "Happu Singh"
// _user.welcomeMessage()

//******************************** */ Declaring arrow function ************************

function chai()
{
    let username ="Happy Sharma"
    console.log(this.username)  // it gives "undefined" as this will not work in functions "this" keyword is for referencing objects only.  
    console.log(this)  // this can be used in functio as it stores many values one can see all the object values by printing it.
}


const chai_ = function(){
    console.log("printing the value")
}

const _chai_ = () => {                      //Explicit arrow function
    console.log("printing the value")
}

// _chai_()

const addtwo= (num1, num) => num1+num  // Implicit arrow function, no need to use return keyword

// console.log(addtwo(10,20))

const substracttwo = (num1, num2) => (num1 - num2)        // this braces is important as it helps very much in react, also it helps us to return object  
const _substracttwo = () => ({username: "Happy Sharma", price: 111})        // () this braces is important as it helps very much in react, also it helps us to return object  

console.log(substracttwo(20,10))
console.log(_substracttwo())