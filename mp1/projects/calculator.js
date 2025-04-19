function calculate(operator) {
    let num1 = parseFloat(document.getElementById("first-number").value);
    let num2 = parseFloat(document.getElementById("second-number").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("output").innerHTML = "Please enter valid numbers.";
        return;
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = "Error: Division by zero!";
            } else {
                result = num1 / num2;
            }
            break;
    }

    displayResult(result);
}

function power() {
    let base = parseFloat(document.getElementById("first-number").value);
    let exponent = parseInt(document.getElementById("second-number").value);

    if (isNaN(base) || isNaN(exponent)) {
        document.getElementById("output").innerHTML = "Please enter valid numbers.";
        return;
    }

    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }

    displayResult(result);
}

function clearFields() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}

function displayResult(result) {
    let outputElement = document.getElementById("output");
    outputElement.innerHTML = result;

    if (result < 0) {
        outputElement.style.color = "red";
    } else {
        outputElement.style.color = "black";
    }
}
