function validateForm() {
    // Access form fields using their IDs
    let firstname = document.forms["myForm"]["fname"].value;
    let lastname = document.forms["myForm"]["lname"].value;
    let userEmail = document.forms["myForm"]["email"].value;
    let userCountry = document.forms["myForm"]["country"].value;
    let userSubject = document.forms["myForm"]["subject"].value;

    // Confirm the First Name field is filled out
    if (firstname == "") {
        alert("First name must be filled out");
        return false; // form not submitted
    }

    // Confirm the Last Name field is filled out
    if (lastname == "") {
        alert("Last name must be filled out");
        return false;
    }

    // Validate userEmail format using a comprehensive regex from stack overflow
    var userEmailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!userEmailPattern.test(userEmail)) {
        alert("Please enter a valid userEmail address");
        return false;
    }

    // Confirm the userCountry field is selected
    if (userCountry == "") {
        alert("Please select a userCountry");
        return false;
    }

    // Confirm the userSubject (message) field is filled out
    if (userSubject == "") {
        alert("userSubject/message must be filled out");
        return false;
    }

    // If all checks pass, the form will be submitted
    alert("Form submitted successfully!");
    return true;
}