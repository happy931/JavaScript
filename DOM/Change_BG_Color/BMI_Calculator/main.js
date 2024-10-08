document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();   // to stop default action of the form
    
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    let message = '';

    if (height > 0 && weight > 0) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        
        if(bmi < 18.5)
            {
            message = `You are UNDERWEIGHT and your BMI is ${bmi}.`;          
        }
        else if(bmi > 30)
            {
            message = `You are OBESE and your BMI is ${bmi}.`;   
            
        }
        else{
            message = `You're weight is normal and your BMI is ${bmi}.`;           
            
        }
    } else {
        message = 'Please enter valid height and weight.';
    }

    document.getElementById('message').innerText = message;
});
