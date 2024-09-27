// console.log("Happy Sharma")


// Data types are of two types primitive(string, number(integer), double, boolean) and non primitive(Arrays, Objects, functions)

// Stack(all primitive data types are using stack) or heap(all non primitive datatypes are usign heap) in memory
// Stack me jo bhi variable ki value hai uska copy milta hai..
// Heap me hame referenc milta hai yani jo bhi change karenge original value me change hoga 
// e.g

let name = "Happy"

let name_1 = name

// console.log(name);
// console.log(name_1);     //yaha pe humne name_1 variable ko ja dusre variable ke value se replace kiya to dusre variable ke value ki copy hame name_1 variable me assign hui tabhi to jab name_1 variable ki value change ki gai to name variable ki value change nahi hui

name_1 = "Sharma" 

// console.log(name_1);


// e.g of heap

let student = {
    email : "student@gmail.com",
    upi : "usergpay"
}

let student_1 = student

student_1.email = "happy@google.com"

// console.log(student.email)
// console.log(student_1.email)

// Heap me jaisa ki hum jante hai value ki copy nah ibalki unka reference milta hai, tabhi to jab humne dusre object ke email ki value change ki to uska effect un sare object pe pada jo us se reference le rahe the.....


// Array in java script 
// create shallow copies(i.e share same reference point)
// unlike arrays in other programming languages it is resizable and can contain any data type in JS 

const myarray = [0,1,2,3,4,5]
const myHeroes = ["shaktiman", "nagraj"]

// yaha pe loop sab jada lagane ki zaroorat nahi hai 

// myarray.push(10)   // add the value at the end
// myarray.pop(2)   // delete the value at the end

// myarray.unshift("Bhaloo")   // adds value at the starting of the array i.e not feaseable as each value needs to shift hence increases load on computer
// myarray.shift()   // removes value at the starting of the array i.e not feaseable as each value needs to shift hence increases load on computer



// console.log(myarray.includes(5))
// console.log(myarray.indexOf(10))
// console.log(myarray.findIndex(0))


// SLICE AND SPLICE

console.log("Original array -> " , myarray)
console.log("Slice applied here ->",myarray.slice(1,3)) 
console.log("orginal array after slice is performed ->" , myarray)

console.log("Splice applied here ->",myarray.splice(1,3))  // This will split the array into two one half will contain 1,2,3 and the original array will now remain with the left elements
console.log("orginal array after splice is performed ->" , myarray)

// console.log(myarray)