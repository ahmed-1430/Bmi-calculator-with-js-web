window.onload = () => {
    const button = document.querySelector("#btn");
    button.addEventListener('click', calculateBmi);    
};

function calculateBmi() {
    const heightcm = document.querySelector("#height");
    const weightkg = document.querySelector("#Weight");
    const result = document.querySelector(".result");

    const height = parseFloat (heightcm.value);
    const weight = parseFloat (weightkg.value);


    if (isNaN(height) || height <= 0) {
        result.innerText = "Please enter a valid height (in cm).";
        return;
    }  
    else if (isNaN(weight) || weight <= 0) {
        result.innerText = "Please enter a valid weight (in kg).";
        return;
    }
    const bmi = (weight / (height * height) * 10000).toFixed(2);

    if (bmi <= 18.5){ 
        result.innerText = `You Are Under Weight ${bmi}`;    
    } else if (bmi >18.5 && bmi <=24.9) {
            result.innerText = `Normal Weight : ${bmi}`;
    } else if (bmi >= 25 && bmi <=29.9){
        result.innerText = `You Are Over Weight : ${bmi}`;
    } else {
        result.innerText = `You are obsessed : ${bmi}`;
    } 
    }