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
    username: "Happt Sharma",
    price: 999
}

function handleObject(anyObjectName){
    console.log(`Name of te user is ${anyObjectName.username} and price is ${anyObjectName.price}`)
}

handleObject(user)   // calling the function must pass the object as argument not any object.



