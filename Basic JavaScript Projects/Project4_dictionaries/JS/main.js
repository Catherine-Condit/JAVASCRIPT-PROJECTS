function my_Dictionary(paragraph) {
    var Person = {
        Name: "Pat",
        Age: 65,
        Location: "Idaho",
        Family: "Smith"
    };

    if (paragraph === "Dictionary1") {
        // When clicking on Dictionary1, display Family (Smith)
        document.getElementById("Dictionary1").innerHTML = Person.Family;
    } else if (paragraph === "Dictionary2") {
        // When clicking on Dictionary2, display Location (after deletion)
        delete Person.Location;
        document.getElementById("Dictionary2").innerHTML = Person.Location; // Will show "undefined"
    }
}
