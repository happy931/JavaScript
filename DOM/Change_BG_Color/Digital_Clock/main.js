// In this we need to built a website which has a timer which will work
//  as it will keep running continuously. which means the timer need to keep updated in regular interval.
// To make it run in certain interval we will use setInterval(function(){},1000) // Remember the syntax

const val = document.querySelector('.time')


setInterval(function(){
    let date = new Date()

    val.innerHTML = date.toLocaleTimeString();
},1000)