let a = 10;
if (a > 5) {
    console.log("10 is greater than 5");
}

//LOCAL AND GLOBAL VARIABLES
var X = 10; //global variable
function Add() {
    var Y = 2; //local variable
    console.log(X + Y + "<br>");
}
function Subract() { //intentional error using console.log() to debug
    console.log(X - Y); //cannot access Y bc Y is a local variable
}
Add();
Subract();

//GET DATE METHOD ASSIGNMENT IF ELSE IF ELSE
function getDate() {
    var currentHour = new Date().getHours();
    var Message;
    if (currentHour < 12 == currentHour > 0) {
        Message = "It is morning!";
    }
    else if (currentHour >= 12 == currentHour < 18) {
        Message = "It is afternoon!";
    }
    else {
        Message = "It is evening!";
    }
    document.getElementById("Time_of_Day").innerHTML = Message;
}

//GET AGE FUNCTION IF ELSE
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 13) {
        Message = "You are old enough to partake in the school play!"
    }
    else {
        Message = "You are not old enough to partake in the school play."
    }
    document.getElementById("Your_Age").innerHTML = Message;
}


