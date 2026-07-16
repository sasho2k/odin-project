// Init variables.
// The operation is split into 3 different parts, the first number, the second number, and the operator.
let firstNumber = null, secondNumber = null, operator = "";

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
    // If the operation is not EQUALS, set the global operator.
    if (operation !== "=") {
        operator = operation;
    }
    // If the operation is EQUALS, 
    else {
        if (secondNumber === null) {
            secondNumber = getText();
        }
        setText(operate(Number(firstNumber), Number(secondNumber), operator));
        return;
    }

    // If both numbers are empty, assume the first number is being filled.
    if (firstNumber === null && secondNumber === null) {
        firstNumber = getText();
        setText("");
    }
    // If second number is the only empty number, assume that number is being filled.
    else if (firstNumber !== null && secondNumber === null) {
        secondNumber = getText();
        setText("");
    }
    // If both numbers are NOT empty, operate using operator saved.
    else if (firstNumber !== null && secondNumber !== null) {
        firstNumber = operate(Number(firstNumber), Number(secondNumber), operator);
        
        // Set second number to null since the first number becomes the result of both numbers.
        secondNumber = null;
    
        // Set text to result.
        setText(firstNumber);
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
        case "=":
            operatorLogic(value);
            break;
        default:
            // Clicking a digit fills in the box with the current text plus the digit.
            setText(getText() + value);
            break;
    }
}