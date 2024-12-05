// Initialize Popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
});

// Initialize Toast

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl)
})

//function  to display toast with selected options
function displaySelectedMovieOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    //display toast
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show()
}

function buyTickets() {
    displaySelectedMovieOptions();
}

//CONTACT FORM SUBMISSION ALERT
// Function to handle the contact form submission
document.getElementById('contact-submit').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the submission alert
    document.getElementById('submission-alert').classList.remove('d-none');

    // Optionally, hide the alert after a few seconds (e.g., 5 seconds)
    setTimeout(function () {
        document.getElementById('submission-alert').classList.add('d-none');
    }, 5000);

    // You can also reset the form or take other actions if needed
    document.querySelector('form').reset(); // Resets the form
});
