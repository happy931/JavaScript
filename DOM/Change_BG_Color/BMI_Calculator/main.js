document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    let message = '';

    if (height > 0 && weight > 0) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        message = `Your BMI is ${bmi}.`;
    } else {
        message = 'Please enter valid height and weight.';
    }

    document.getElementById('message').innerText = message;
});
