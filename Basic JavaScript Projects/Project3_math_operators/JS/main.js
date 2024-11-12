// Function to add two numbers and update the paragraph with id 'Math'
function addNumbers() {
    //make two numbers to add
    let num1 = 5;
    let num2 = 10;
    let sum = num1 + num2; // Perform the addition
    let additionElement = document.getElementById('Addition'); // Get the paragraph element by id
    additionElement.textContent = "The result of " + num1 + " + " + num2 + " is " + sum + ".";// Update the content of the paragraph with the result
}

function subtractNumbers() {
    //make two numbers to subract
    let num1 = 12;
    let num2 = 10;
    let difference = num1 - num2; //preform the subtraction
    let subtractionElement = document.getElementById('Subtraction'); //get the paragraph element by id
    subtractionElement.textContent = "The result of " + num1 + " - " + num2 + " is " + difference + ".";//update the content of the paragraph with the result
}

function multiplyNumbers() {
    var simple_Math = 6 * 8;
    document.getElementById("Multiply").innerHTML = "The result of 6 x 8 = " + simple_Math + ".";
}

function divideNumbers() {
    var simple_Math = 48 / 6;
    document.getElementById("Divide").innerHTML = "The result of 48 / 6 = " + simple_Math + ".";
}

//multiple operations operator
function moreMath() {
    var simple_Math = (3 + 5) * 10 / 4 - 3;
    document.getElementById("All").innerHTML = "3 plus 5, multiplied by 10, divided by 4, and then subtracted by 3 equals " + simple_Math + ".";
}

//modulus operator
function modulusOperator() {
    var simple_Math = 32 % 5;
    document.getElementById("Modulus").innerHTML = "When you divide 32 by 5 you have a remainder of: " + simple_Math + ".";
}

//negation operator
function negation_Operator() {
    var x = 21;
    document.getElementById("Negation").innerHTML = "When you use the negation operator on the number 21, the output is " + -x + ".";
}

//increment operator
var x = 17;
x++;
document.write("Applying the increment operator to 17 gives " + x + ".<br>");

//decrement operator
var y = 24;
y--;
document.write("Applying the decrement operator to 24 gives " + y + ".<br>");

window.alert(Math.random() * 50); //results in a window alert that displays a random number between 0-50

// Display the square root of 2 (Math.SQRT2) in the element with id "SQRT"
window.onload = function () {
    document.getElementById("SQRT").innerText = "The square root of 2 is: " + Math.SQRT2;
};

