// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Handle division by zero
    if (number2 === 0) {
        return "Cannot divide by zero!";
    }
    return number1 / number2;
}

// Function to update the result display
function updateResult(result, operation, num1, num2) {
    const resultElement = document.getElementById('calculation-result');
    const operationDisplay = document.getElementById('operation-display');
    
    resultElement.textContent = result;
    
    // Show the operation that was performed
    if (operation && num1 !== undefined && num2 !== undefined) {
        operationDisplay.textContent = `${num1} ${operation} ${num2} = ${result}`;
    } else {
        operationDisplay.textContent = '';
    }
}

// Function to get input values with validation
function getInputValues() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    return { num1, num2 };
}

// Event listeners for each operation button

// Addition
document.getElementById('add').addEventListener('click', function() {
    const { num1, num2 } = getInputValues();
    const result = add(num1, num2);
    updateResult(result, '+', num1, num2);
});

// Subtraction
document.getElementById('subtract').addEventListener('click', function() {
    const { num1, num2 } = getInputValues();
    const result = subtract(num1, num2);
    updateResult(result, '-', num1, num2);
});

// Multiplication
document.getElementById('multiply').addEventListener('click', function() {
    const { num1, num2 } = getInputValues();
    const result = multiply(num1, num2);
    updateResult(result, '×', num1, num2);
});

// Division
document.getElementById('divide').addEventListener('click', function() {
    const { num1, num2 } = getInputValues();
    const result = divide(num1, num2);
    updateResult(result, '÷', num1, num2);
});

// Clear inputs on focus
document.getElementById('number1').addEventListener('focus', function() {
    this.select();
});

document.getElementById('number2').addEventListener('focus', function() {
    this.select();
});

// Optional: Allow Enter key to trigger operations
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // Trigger addition by default when Enter is pressed
        const { num1, num2 } = getInputValues();
        const result = add(num1, num2);
        updateResult(result, '+', num1, num2);
    }
});