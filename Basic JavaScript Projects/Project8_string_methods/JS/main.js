//toUpperCase() method
let text1 = "This text displays in all upper case!";
let result = text1.toUpperCase();
document.getElementById("text_upper").innerHTML = result;

//search() method
let text2 = "My favorite animal is a dog!";
let position = text2.search("animal");
document.getElementById("text_search").innerHTML = position;

//concatenate method adds two or more strings together
function concatenate() {
    var part1 = "Here is ";
    var part2 = "a concatenated ";
    var part3 = "string!";
    var whole_sentence = part1.concat(part2, part3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//slice method extracts a specified section of a string and prints it
function slice() {
    var Sentence = "Here is a sliced string!";
    var Section = Sentence.slice(10, 16); //numbers indicate which characters in your string will be cut out and displayed
    document.getElementById("Slice").innerHTML = Section;
}

//Number methods assist you in working with numbers. There are several types
// toString() method returns a number as a string 
function string_Method() {
    var X = 156;
    document.getElementById("Num_to_String").innerHTML = X.toString();
}

//The toPrecision() method formats a number to a specified length
function precision_Method() {
    var X = 17856.3453562345678;
    document.getElementById("Precision").innerHTML = X.toPrecision(8); //specifices precision to digits
}

//toFixed() converts a number to a string, rounded to a specified number of decimals
let num = 6.349876;
let n  = num.toFixed(2);
document.getElementById("text_fixed").innerHTML = n;

//valueOf() returns the primitive value of a string
let text_value_of = "Hello everyone!";
let result_text_value_of = text_value_of.valueOf();
document.getElementById("text_value_of").innerHTML = result_text_value_of;

