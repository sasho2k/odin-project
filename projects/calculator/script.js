// Init variables
let firstNumber = null, secondNumber = null, operator = "", text = "";

// Calculation functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// take two numbers and an operator and return the result
function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function pressButton(value) {
    switch (value) {
        case "c":
            text = "";
            document.getElementById("input-display").value = text;
            break;
        default:
            text += value;
            document.getElementById("input-display").value = text;
            break;
    }
}