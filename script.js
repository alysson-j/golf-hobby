function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let years = document.getElementById("years").value;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let yearsError = document.getElementById("yearsError");
    let successMessage = document.getElementById("successMessage");

    // Clear old messages
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    yearsError.innerHTML = "";
    successMessage.innerHTML = "";

    let isValid = true;

    if (name === "") {
        nameError.innerHTML = "Name is required.";
        isValid = false;
    }

    if (email === "") {
        emailError.innerHTML = "Email is required.";
        isValid = false;
    } else if (!email.includes("@")) {
        emailError.innerHTML = "Please enter a valid email.";
        isValid = false;
    }

    if (years === "") {
        yearsError.innerHTML = "Please enter years played.";
        isValid = false;
    } else if (years < 0) {
        yearsError.innerHTML = "Years cannot be negative.";
        isValid = false;
    }

    if (isValid) {
        successMessage.innerHTML = "Form submitted successfully!";
        successMessage.style.color = "green";
    }

    return false; // prevents page refresh
}

function experienceLevel() {

    let years = document.getElementById("years").value;
    let result = document.getElementById("experienceResult");

    years = Number(years);

    if (years === 0) {
        result.innerHTML = "Newbie.";
        result.style.color = "red";
    }
    else if (years <= 1) {
        result.innerHTML = "Beginner Golfer";
        result.style.color = "blue";
    }
    else if (years <= 5) {
        result.innerHTML = "Intermediate Golfer";
        result.style.color = "orange";
    }
    else {
        result.innerHTML = "Advanced Golfer";
        result.style.color = "green";
    }
}

function calculateHandicap() {

    let score = document.getElementById("score").value;
    let par = document.getElementById("par").value;
    let result = document.getElementById("result");

    score = Number(score);
    par = Number(par);

        if (!score || !par) {
        result.innerHTML = "Please enter both values.";
        result.style.color = "red";
        return;
    }

    let handicap = score - par;

    result.innerHTML = "Your estimated handicap is: " + handicap;
    result.style.color = "green";
}

// Object Constructor (OO Concept)
function GolfExperience(startYear) {
    this.startYear = startYear;

    this.calculateYears = function() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.startYear;
    };
}

// Function to Display Result
function showYearsPlaying() {

    let startYear = document.getElementById("startYear").value;
    let result = document.getElementById("yearsResult");

    startYear = Number(startYear);

    if (startYear === 0) {
        result.innerHTML = "Please enter a valid year.";
        result.style.color = "red";
        return;
    }

    let golfer = new GolfExperience(startYear);

    let years = golfer.calculateYears();

    result.innerHTML = "You have been playing golf for " + years + " years.";
    result.style.color = "green";
}