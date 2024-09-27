function one(){
    const username = "Happy Sharma"

    function two(){
        const websites = "Youtube"
        console.log(username + websites)
    }
    two()
}

one()   /// here child function can access the parent function's variable as for them it is like global variable 
