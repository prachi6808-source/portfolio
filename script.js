// Change Theme
function changeTheme() {
    document.body.classList.toggle("light");
}

// Welcome Button
function welcome() {
    alert("Welcome to my portfolio! Thank you for visiting.");
}

// Contact Form
function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill all the details.");
    }
    else {
        alert("Thank you " + name + "! Your message is received.");

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
}