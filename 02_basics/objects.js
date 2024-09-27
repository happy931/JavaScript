// Two thing to master JS i.e. objects and events(DOM)

//Two ways to declare object (i) as literals (ii) as constructors

// Object.create // this is a way to create object using constructor which is singleton..... all literals are not singleton

const mysymbol = Symbol("key1")  // declaring a symbol data type
    //object declared, always in key and values pair
const JS_user = {
    name: "Happy Sharma",
    [mysymbol] : "mykey1",
    "Full_Name": "Happy Kundan Sharma",
    age: 18,
    location: "Surat",
    email: "happy@google.com",
    isLoggenIn: false,
    LastLoginDays:["Sunday", "Monday"]
}
    // Ways to access objects
    // console.log(JS_user.location)
    // console.log(JS_user["Full_Name"])
    // console.log(JS_user[mysymbol])
    
    // Ways to change object's values
    JS_user.email = "happykundan2003@google.com"
    JS_user["Full_Name"] = "happy Kundan sharma"
    JS_user[mysymbol] = "my_newkey1"
    
    //console.log(JS_user)
    //If need to not allow anyone to change the object's value then use freeze()
    
    // Object.freeze(JS_user)  
    // JS_user.email = "happykundan2003@microsoft.com"
    // console.log(JS_user["email"])


// Declaring a function using object

JS_user.greeting = function(){
    console.log("Hello JS user")
}

JS_user.greetingTwo = function(){
    // console.log("Hello JS user ", this.name)   // dono sahi hai
    console.log("Hello JS user ", JS_user.name)
}

// console.log(JS_user.greetingTwo())
// console.log(JS_user.greeting())


//********************************************************** OBJECTS PART_2 ******************************************************

//const tinder = new Object()     //This is a singleton object

const tinder = { } // This is not a singleton object, this is a literal object.
tinder.name = "Happy Sharma"
tinder.id = "123abc"
tinder.IsLoggedIn = false

// console.log(tinder)


//////  declaring objects in Objects

const regularUser = {
    email:"happy@google.com",
    fullname:{
        userfullname:{
            firstname: "Happy",
            lastname: "Sharma"
        },
        usermiddlename:{
            firstname:"Kundan",
            lastname:"Sharma"
        }
    },
    address: "H.no 83"
}

// console.log(regularUser)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.fullname.userfullname.lastname)

//What if we have to concatinate al the object till a certain depth

//Merging two or more objects usign Object.assign(target, source)
// in console below we have used {} as target which helps to concatinate multiple objects at a time or else we can pass only two parameters

const obj1 ={
    1:"a", 2:"b"
}
const obj2 ={
    3:"c", 4:"d"
}
const obj4 ={
    5:"e", 6:"f"
}

// console.log(Object.assign({},obj1,obj2,obj4))
//            or
// console.log({...obj1, ...obj2, ...obj4}) //using spread


// ********************************* Oject De-Structuring *******************************

const User = {
    username: "Happy Sharma",
    email: "happy@google.com",
}

// if we need to print same thing multiple time then we have to write User.email multiple times insted use this 

const {username} = User
console.log(username)     