const form = document.querySelector('form')
form.addEventListener('submit',function(e) {
    e.preventDefault(); // Prevents the form from submitting and refreshing the page
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height ==='' || height <=0 || isNaN(height)){
        results.innerHTML = ' Please provide a valid height';
    }
    else if(weight ==='' || weight <=0 || isNaN(weight)){
        results.innerHTML = ' Please provide a valid weight';
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        
        if(bmi < 18.5){
            results.innerHTML = `Your BMI is ${bmi} and you are underweight`;
        }
        else if(bmi >= 18.5 && bmi < 25){
            results.innerHTML = `Your BMI is ${bmi} and you are normal weight`;
        }
        else if(bmi >= 25 && bmi < 30){
            results.innerHTML = `Your BMI is ${bmi} and you are overweight`;
        }
        else { // bmi >= 30
            results.innerHTML = `Your BMI is ${bmi} and you are very overweight`;
        }
    }
})