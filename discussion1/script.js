function checkAge() {
    const ageInput = document.getElementById('input').value;

    const age = Number(ageInput);

    let error_message = "";

    if (age < 18) {
        error_message = "You must be over the age of 18 to enter!";
    }
    else if (age > 120 || age < 0) {
        error_message = "It seems like you may be lying about your age!";
    }
    else if (isNaN(age)) {
        error_message = "Your age must be a number.";
    }
    else if (age % 1 !==0){
        error_message = "Your age must be an integer.";
    }

    if (error_message == "") {
        document.getElementById('main-content').style.visibility = "visible";
        document.getElementById('error-content').style.visibility = "hidden";
    } else {
        document.getElementById("error-message").innerHTML = error_message;
        document.getElementById('main-content').style.visibility = "hidden";
        document.getElementById('error-content').style.visibility = "visible";
    }

}

