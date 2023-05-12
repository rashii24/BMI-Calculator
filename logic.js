let bmiCalc = document.getElementById('btn');

bmiCalc.addEventListener('click', () => {

    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status = false, weight_status = false;
    

    //verification of user's input
    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = "Please enter valid height!";
        result.innerHTML = '';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = "Please enter valid weight!";
        result.innerHTML = '';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }
    

    //processing on valid input
    if(height_status && weight_status){

        
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = 'Under weight : '+bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Normal : '+bmi;
        }else if(bmi >= 24.9){
            result.innerHTML = 'Over weight : '+bmi;
        }else{
            alert('Errors found!');
            result.innerHTML = '';
        }

        
    }


});