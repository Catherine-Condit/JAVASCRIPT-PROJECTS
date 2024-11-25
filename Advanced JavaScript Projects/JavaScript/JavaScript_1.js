function Fruit_Function() {
    var Fruit_Output;
    var Fruits = document.getElementById("Fruit_Input").value;
    var Fruit_String = " is a delicious fruit!";
    switch (Fruits) {
        case "Apple":
            Fruit_Output = "An apple" + Fruit_String;
            break;
        case "Banana":
            Fruit_Output = "A banana" + Fruit_String;
            break;
        case "Grape":
            Fruit_Output = "A grape" + Fruit_String;
            break;
        case "Berry":
            Fruit_Output = "A berry" + Fruit_String;
            break;
        case "Pineapple":
            Fruit_Output = "A pineapple" + Fruit_String;
            break;
        case "Peach":
            Fruit_Output = "A peach" + Fruit_String;
            break;
        case "Pear":
            Fruit_Output = "A pear" + Fruit_String;
            break;
        case "Plum":
            Fruit_Output = "A plum" + Fruit_String;
            break;
        case "Cherry":
            Fruit_Output = "A cherry" + Fruit_String;
            break;
        case "Orange":
            Fruit_Output = "An orange" + Fruit_String;
            break;
        case "Watermelon":
            Fruit_Output = "A watermelon" + Fruit_String;
            break;
        default:
            Fruit_Output = "Please enter a fruit exactly as written on the above list.";
            break;
    }
    document.getElementById("Output").innerHTML = Fruit_Output;
}

//document.getElementByClassName() method
function Text_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "My new favorite color is blue too!";
}

//canvas graphic gradient color challenge
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Fill the entire canvas with a blue gradient
const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, 'darkblue');  // Start color (dark blue)
gradient.addColorStop(1, 'lightblue');      // End color (light blue)

// Set the fill style to the gradient and fill the canvas
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);  // Fill the entire canvas
