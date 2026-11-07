// Contact page: form validation
function validateForm(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name.trim() === "" || email.trim() === "") {
        alert("Please fill out all required fields.");
        event.preventDefault();
    } else {
        // Both required fields have been filled in.
    }
}

// Projects page: show or hide each project description
function toggleDescription(descriptionId) {
    var description = document.getElementById(descriptionId);

    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}

// Homepage: add the date and time to the footer
function showLoadTime() {
    var footer = document.getElementById("pageFooter");
    var newParagraph = document.createElement("p");
    var now = new Date();
    var text = document.createTextNode("Page loaded on: " + now.toLocaleString());

    newParagraph.appendChild(text);
    footer.appendChild(newParagraph);
}

// Connect the events on each page
function setupEvents() {
var contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.onsubmit = validateForm;
}

var firstButton = document.getElementById("toggle1");
var secondButton = document.getElementById("toggle2");
if (firstButton && secondButton) {
    firstButton.onclick = function () {
        toggleDescription("description1");
    };
    secondButton.onclick = function () {
        toggleDescription("description2");
    };
}

var quote = document.getElementById("cvQuote");
if (quote) {
    quote.addEventListener("mouseover", function () {
        quote.style.backgroundColor = "#d8e8ff";
        quote.style.fontStyle = "normal";
    });
    quote.addEventListener("mouseout", function () {
        quote.style.backgroundColor = "#edf3fc";
        quote.style.fontStyle = "italic";
    });
}

if (document.getElementById("pageFooter")) {
    window.onload = showLoadTime;
}

}

setupEvents();
