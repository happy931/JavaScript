// Immediately Invoked Function XPathExpression(IIFE)
// We use these functions in the scenerio when we want to execute the function immediately just like when we want to connect to our DB

// syntax is just wrap a normal function into parenthesis and and a parenthesis at the end to execute the IIFe function.

(function abc(name){
    console.log(`Hello ,${name}`)
})("Happy Sharma");               // when we are writing two IIFE function simultaneously then after executing the function()() we need to tell the function to stop by using ";".
                    //To pass any parameter we need to pass the paramenter in the execution parenthesis.


// creating iffie using arrow function

((name) => {
    console.log(`Welcome, ${name}`)
})("Happy Sharma");