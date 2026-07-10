// Init variables.
// The operation is split into 3 different parts, the first number, the second number, and the operator.
// Display result is how we can display the result after a multioperation and be able to clear the display when the user types.
let firstNumber = null, secondNumber = null, operator = "", displayResult = 0;

// Calculation functions.
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

// Take two numbers and an operator and return the result.
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

// Set display text.
function setText(text) {
    document.getElementById("input-display").value = text;
}

// Get display text.
function getText() {
    return document.getElementById("input-display").value;
}

// Operator logic.
function operatorLogic(operation) {
    // If both numbers are empty, assume the first number is being filled.
    if (firstNumber === null && secondNumber === null) {
        firstNumber = getText();
    }
    // If second number is the only empty number, assume that number is being filled.
    else if (firstNumber !== null && secondNumber === null) {
        secondNumber = getText();
    }
    // If both numbers are NOT empty, operate using operator saved.
    else if (firstNumber !== null && secondNumber === null) {
        firstNumber = operate(firstNumber, secondNumber, operation);
        
        // Set second number to null since the first number becomes the result of both numbers.
        secondNumber = null;

        // Set text to result.
        setText(firstNumber);
        displayResult = 1;
    } 
}

// Button press switch statement that holds base logic.
function pressButton(value) {
    switch (value) {
        // Clear calculator
        case "c":
            firstNumber = null, secondNumber = null, operator = "";
            setText("");
            break;
        // Beginning of operator logic. (+, -, x, /, =)
        case "+":
        case "-":
        case "x":
        case "/":
            operatorLogic(value);
            break;
        case "=":
            break;
        default:
            // Clicking a digit fills in the box with the current text plus the digit.
            if (displayResult === 1) {
                setText("");
                displayResult = 0;
            }
            setText(getText() + value);
            break;
    }
}