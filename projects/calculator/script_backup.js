// Init variables.
let firstNumber = null, secondNumber = null, operator = "", text = "";

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

// take two numbers and an operator and return the result.
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
function setText(inputText) {
    text = inputText;
    document.getElementById("input-display").value = inputText;
}

// Get display text.
function getText() {
    return document.getElementById("input-display").value;
}

// Logic to correctly calculate multioperation statements.
function numberLogic(givenOperator) {
    // Set global operator from parameter.
    operator = givenOperator;

    // Both numbers are empty:
    // First number is the value of the current display.
    if (firstNumber === null && secondNumber === null) {
        firstNumber = Number(getText());
    }

    // First number is not empty and second number is empty:
    // Safe to assume this is the second number.
    else if (firstNumber !== null && secondNumber === null) {
        secondNumber = Number(getText());
    }

    // Both numbers are not empty:
    // Calculate both numbers and make the first number the result. Set second number to null.
    else if (firstNumber !== null && secondNumber !== null) {
        firstNumber = operate(firstNumber, secondNumber, operator);
        secondNumber = null;
    }

    console.log(`numberlogic - 1st num: ${firstNumber}, 2nd num: ${secondNumber}, operator: ${operator}, getText: ${getText()}`);

    setText("");
}

// Button press switch statement that holds base logic.
function pressButton(value) {
    switch (value) {
        // Clear calculator
        case "c":
            firstNumber = null, secondNumber = null, operator = "";
            setText("");

            console.log(`CLEAR - 1st num: ${firstNumber}, 2nd num: ${secondNumber}, operator: ${operator}, getText: ${getText()}`);

            break;
        // Beginning of operator logic.
        case "+":
        case "-":
        case "x":
        case "/":
            numberLogic(value);
            break;
        case "=":
            // Second number is null because there was a multioperation statement.
            // Grab second number from the display, operate, set display to result.
            if (secondNumber === null) {
                secondNumber = Number(getText());
            }
            if (firstNumber !== null && secondNumber !== null) {
                
            }

            text = operate(firstNumber, secondNumber, operator);
            setText(text);

            console.log(`pressButton - 1st num: ${firstNumber}, 2nd num: ${secondNumber}, operator: ${operator}, getText: ${getText()}`);
            
            break;
        default:
            // If not an operator, add text to display text.
            // Mimics "typing".
            text += value;
            setText(text);
            break;
    }
}