function displayCapital(country) {
    var capital = country.getAttribute("data-capital");
    alert("The capital of " + country.innerHTML + " is " + capital + "!");
}