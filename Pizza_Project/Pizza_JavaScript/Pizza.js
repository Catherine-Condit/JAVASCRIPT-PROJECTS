// This function generates the receipt when the user makes a selection
function getReceipt() {
    //This initializes our string so it can get passed from function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    // Initializes a variable to track the total cost of the order
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    // Loops through all the pizza size options
    for (var i = 0; i < sizeArray.length; i++) {
        // Checks if the current size option is selected
        if (sizeArray[i].checked) {
            // If checked, stores the selected size value
            var selectedSize = sizeArray[i].value;
            // Adds the selected size to the receipt text (text1)
            text1 = text1 + selectedSize + "<br>";
        }
    }
    // Assigns the appropriate price based on the selected pizza size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    // Updates the running total to include the cost of the selected size
    runningTotal = sizeTotal;
    //logs for debugging
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //these variables will get passed on to each function
    // Passes the running total and the receipt text to the getTopping function
    getTopping(runningTotal, text1);
};

// This function handles the addition of toppings to the order and calculates their total
function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    // Loops through all the topping options
    for (var j = 0; j < toppingArray.length; j++) {
        // Checks if the current topping option is selected
        if (toppingArray[j].checked) {
            // If checked, adds the topping to the selectedTopping array
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            // Adds the selected topping to the receipt text (text1)
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    // Counts how many toppings were selected
    var toppingCount = selectedTopping.length;
    // If more than 1 topping is selected, charges for additional toppings (first topping is free)
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);// Each extra topping costs $1
    } else {
        toppingTotal = 0; // No charge if only one or no toppings are selected
    }
    // Updates the running total to include the cost of the toppings
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    // Displays the receipt text (text1) in the element with id "showText"
    document.getElementById("showText").innerHTML = text1;
    // Displays the total price in the element with id "totalPrice"
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
};