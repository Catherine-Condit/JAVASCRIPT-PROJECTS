//ternary operators using input from the browser made with HTML and JavaScript
function Ride_Function() { //takes in user height and returns whether they can ride or not
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
function Vote_Function() { //takes in user age and returns whether they can vote or not
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote." : "You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

//“NEW" AND "THIS" KEYWORDS
// Constructor function to create Person objects
function Person(firstName, lastName, age, occupation) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.occupation = occupation;
}
// Creating instances of Person using the 'new' keyword
var John = new Person("John", "Don", 30, "Engineer");
var Jane = new Person("Jane", "Smith", 28, "Designer");
var Mike = new Person("Mike", "Johnson", 35, "Developer");
// Function to display John's information in HTML file
function myFunction() {
    document.getElementById("New_and_This").innerHTML =
        "John's name is " + John.firstName + " " + John.lastName +
        ". He is " + John.age + " years old and works as an " + John.occupation + ".";
}

// Object constructor function for creating Book objects
function Book(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
}
// Creating an instance of the Book object using the 'new' keyword
var myBook = new Book("The Hound of the Baskervilles", "Sir Arthur Conan Doyle", 1902);
// Function to display book information in HTML file
function displayBookInfo() { 
    document.getElementById("bookInfo").innerHTML =
        "Book Title: " + myBook.title + "<br>" +
        "Author: " + myBook.author + "<br>" +
        "Year Published: " + myBook.yearPublished;
}

//NESTED FUNCTION
// Define the main function
function changeText() {
    // Nested function that updates the content of the <p> element
    function updateContent() {
        // Access the <p> element by ID and change its text content
        var paraElement = document.getElementById('Nested_Function');
        paraElement.textContent = "Text has been updated!";
    }
    // Call the nested function to update the content
    updateContent();
}
