//ALARM TIMER
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);  //means that the program is pausing for 1,000 milliseconds (i.e., 1 second)
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

//AUTOMATIC SLIDESHOW
let slideIndex = 0;
showSlides();

function showSlides() {
    let n;
    let slides = document.getElementsByClassName("mySlides");
    for (n = 0; n < slides.length; n++) {
        slides[n].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}