const color = document.querySelectorAll('div')
console.log(color)


const body = document.querySelector('body')
// console.log(body)

const BG = body.style.backgroundColor
// console.log(BG)

let buttonEnabled = true; // initial state



// const element = document.getElementById('bo_dy'); // Replace with your element's ID
// const bgc = element.style.backgroundColor;
// console.log(bgc); // Output: the current background color as a string



color.forEach(function(rang) {
    rang.addEventListener('mouseover', function(e){
        // console.log(e.target.id)
        if(e.target.id === 'tile1'){
            body.style.backgroundColor = 'black'
            document.getElementById('tile5').style.color = 'orange'
            document.getElementById('tile5').innerHTML = `You have just mouse-hovered and your BG_COLOR is, Black`
        }
    })
    rang.addEventListener('mouseleave', function(e){
        // console.log(e.target.id)
        if(e.target.id === 'tile1'){
            body.style.backgroundColor = BG
            document.getElementById('tile5').style.color = 'black'
            document.getElementById('tile5').innerHTML = `You have just mouse-out from, Black`
        }
    })
    rang.addEventListener('mouseover', function(e){
        // console.log(e.target.id)
        if(e.target.id === 'tile2'){
            body.style.backgroundColor = 'cyan'
            document.getElementById('tile5').style.color = 'black'
            document.getElementById('tile5').innerHTML = `You have just mouse-hovered and your BG_COLOR is, CYAN`
        }
    })
    rang.addEventListener('mouseleave', function(e){
        // console.log(e.target.id)
        if(e.target.id === 'tile2'){
            body.style.backgroundColor = BG
            document.getElementById('tile5').style.color = 'black'
            document.getElementById('tile5').innerHTML = `You have just mouse-out from, cyan`
        }
    })
    rang.addEventListener('click', function(e){
        // console.log(e.target.id)

          if (buttonEnabled) 
            {
                if(e.target.id === 'tile3')
                    {
                        body.style.backgroundColor = 'orange'
                        document.getElementById('tile5').innerHTML = "You just clicked on Orange Tile"
                    }              // execute click handler 1
            } 
            else 
            {
                body.style.backgroundColor = BG
                        document.getElementById('tile5').innerHTML = "You just switched-off Orange Tile"                // execute click handler 2
            }
          buttonEnabled = !buttonEnabled; // toggle the flag

        
    })





    rang.addEventListener('click', function(e){
        // console.log(e.target.id)
        if(e.target.id === 'tile4'){
            body.style.backgroundColor = 'magenta'
        }
    })
    
})