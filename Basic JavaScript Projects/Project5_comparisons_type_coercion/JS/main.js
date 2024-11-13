document.write(typeof 6);

var num = 23;
var str = "<br>My favorite number is " + num + ".<br>"; //coercion: number to string
document.write(str); //output: "The answer is 23"\

document.write(2E310 + "<br>"); //displays "infinity" for any numbers > 1.7976931348623157E308, plus a line break
document.write(-3E310 + "<br>");//displays "-infinity" or any negative number that is -1.7976931348623157E308 or lower

document.write(11 > 23); //boolean logic displays false
document.write("<br>");    // adds a line break
document.write(11 < 23); //boolean logic displays true
document.write("<br>");
document.write(1 == 2); //tests whether 1 is equal to 2 in value. returns false
document.write("<br>");
document.write(1 == 1); //tests whether 1 is equal to 1. returns true
document.write("<br>");

//=== checks whether X is equal to Y AND whether X is the same data type as Y
A = 8;
B = "8";
document.write(A === B); //Returns false by writing a different data type but the same value for both
document.write("<br>");
C = "Happy";
D = "Happy";
document.write(C === D); //Returns true by ensuring to match the data type and value
document.write("<br>");
E = "10";
F = 11;
document.write(E === F); //Returns false by writing a different data type and different value
document.write("<br>");
G = "Hi";
H = "Bye";
document.write(G === H); //Returns false by writing the same data type but a different value for both
document.write("<br>");

document.write(31 > 25 && 11 > 2); //&& both conditions must be true to print true. true
document.write("<br>");
document.write(31 > 45 && 11 > 2); //gives false bc one is false
document.write("<br>");
document.write(50 > 100 || 23 > 20); //at least one condition must be true to print true
document.write("<br>");
document.write(10 > 100 || 19 > 20);//gives flase bc neither true\
document.write("<br>");

function my_Function(elementId) {
    //for each element, check which one is clicked and update accordingly
    if (elementId === "Test1") {
        document.getElementById("Test1").innerHTML = 0 / 0; //displays NaN
    } else if (elementId === "Test2") {
        document.getElementById("Test2").innerHTML = isNaN('This is a string'); //returns true because it's not a number
    } else if (elementId === "Test3") {
        document.getElementById("Test3").innerHTML = isNaN(101); //returns false because 101 is a number
    } else if (elementId === "Test4") {
        document.getElementById("Test4").innerHTML = 1E308 / 0; // Displays Infinity (positive number divided by 0)
    } else if (elementId === "Test5") {
        document.getElementById("Test5").innerHTML = -1E308 / 0; // Displays -Infinity (negative number divided by 0)
    }
}

console.log(24 + 6); //displays "30" in the webpage's console
console.log(100 < 99); //displays “false” in the console using Boolean logic and the console.log() method

// not operator !
function not_Function1(){
    document.getElementById("Not_False").innerHTML = ! (20>10); //returns false bc 20 IS greater than 10
    //writing !(5>10) would give true bc a double negative
}
function not_Function2(){
    document.getElementById("Not_True").innerHTML = ! (5>10); //returns true bc a double negative
}
