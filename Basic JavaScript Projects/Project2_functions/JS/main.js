// outputs the content of the paragraph with the id 'output'
function updateText() {
    var firstText = "Hello! ";
    var secondText = "This is a JavaScript function.";

    // Concatenate the two strings
    var combinedText = firstText + secondText;

    // Using document.getElementById() to get the element with id 'output'
    document.getElementById("output").innerHTML = combinedText; // Updates the content of the paragraph
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this bootcamp!"; //using the += operator to append a string to 'sentence'
    document.getElementById("Concatenate").innerHTML = sentence; //display the result in the HTML element with the id "Concatenate"
}