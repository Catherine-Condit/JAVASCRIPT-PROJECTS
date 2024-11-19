//while loop
function Call_Loop() {
    let text = "";
    let n = 10;
    while (n >= 0) {
        text += "Rocket launch in " + n + "<br>";
        n--;
    }
    document.getElementById("Loop").innerHTML = text; // Update the <p> element
    document.getElementById("Launch").innerHTML = "Rocket Launched!"; // Update the <p> element
}

//length property challenge
function String_Length() {
    let text = "Rocket launches are so loud."
    let length = text.length;
    document.getElementById("demo").innerHTML = length;
}

//for loop
var Rockets = ["Nike Apache", "Thor DSV-2", "Hopi Dart", "SpaceLoft XL", "Mesquito", "ALV X-1"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Rockets.length; Y++) {
        Content += Rockets[Y] + "<br>";
    }
    document.getElementById("List_of_Rockets").innerHTML = Content;
}

//ID assignment
function Rocket_Launch_Date() {
    var Rocket_Date = [];
    Rocket_Date[0] = "1961 the Nike Apache";
    Rocket_Date[1] = "1962 the Thor DSV-2";
    Rocket_Date[2] = "1963 the Hopi Dart";
    Rocket_Date[3] = "2006 the SpaceLoft XL";
    Rocket_Date[4] = "2008 the Mesquito";
    Rocket_Date[5] = "2008 the ALV X-1";
    document.getElementById("Rocket").innerHTML = "In " + Rocket_Date[4] + " was launched."
}

//constant keyword
function constant_function() {
    const Rocket = { type: "Nike Apache", brand: "Atlantic Research", color: "white" };
    Rocket.color = "orange";
    Rocket.price = "$6,000";
    document.getElementById("Constant").innerHTML = "The " + Rocket.type + " rocket, made by " + Rocket.brand + ", was " + Rocket.color + " and cost " + Rocket.price + " to launch.";
}

//let keyword
var A = "Rockets are fascinating inventions!"
document.getElementById("keyword1").innerHTML = A;
{
    let A = "Rockets are interesting innovations!";
    document.getElementById("keyword2").innerHTML = A;
}
document.getElementById("keyword3").innerHTML = A;

//JS return 
// Call a function and save the return value in x:
var X = myFunction(2, 10);
document.getElementById("return").innerHTML = X;

function myFunction(a, b) {
    // Return the product of a and b
    return a * b;
}

//object assignment
let rocket = {
    name: "Mesquito",
    type: "sounding",
    year: "2024",
    color: "silver",
    description: function () {
        return "The new rocket is a " + this.year + " " + this.color + " " + this.name + " " + this.type + " rocket.";
    }
}
document.getElementById("Rocket_Object").innerHTML = rocket.description();

//break and continue statement loop
let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 2) { continue; } //skips number 2 and continues on until condition 1 === 5 is fulfilled
    if (i === 4) { continue; } //skips number 4
    if (i === 6) { break; }
    text += "The rocket number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;