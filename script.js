let emailWidget = document.querySelector("#email");
let cemailWidget = document.querySelector("#cemail");

let formWidget = document.querySelector("#form");
formWidget.addEventListener("submit", checkForm);

function checkForm(event) {
    if (cemailWidget.value != emailWidget.value) {
        event.preventDefault();
        alert("Emails do not match.");
    }
}

