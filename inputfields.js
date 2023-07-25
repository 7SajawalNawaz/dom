const form = document.getElementById("registrationForm");
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const ageInput = document.getElementById("age");

// Function to validate full name
function validateFullName() {
    const fullNameValue = fullNameInput.value.trim();

    if (fullNameValue === "") {
        setError(fullNameInput, "Full name is required.");
    } else {
        removeError(fullNameInput);
    }
}

// Function to validate email
function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        setError(emailInput, "Invalid email format.");
    } else {
        removeError(emailInput);
    }
}

// Function to validate password
function validatePassword() {
    const passwordValue = passwordInput.value.trim();

    if (passwordValue.length < 6) {
        setError(passwordInput, "Password must be at least 6 characters long.");
    } else {
        removeError(passwordInput);
    }
}

// Function to validate confirm password
function validateConfirmPassword() {
    const confirmPasswordValue = confirmPasswordInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (confirmPasswordValue !== passwordValue) {
        setError(confirmPasswordInput, "Passwords do not match.");
    } else {
        removeError(confirmPasswordInput);
    }
}

// Function to validate age
function validateAge() {
    const ageValue = ageInput.value.trim();

    if (isNaN(ageValue) || ageValue < 1 || ageValue > 150) {
        setError(ageInput, "Invalid age.");
    } else {
        removeError(ageInput);
    }
}

// Function to set error message and highlight the input field
function setError(inputElement, errorMessage) {
    const errorElement = inputElement.nextElementSibling;
    errorElement.textContent = errorMessage;
    inputElement.classList.add("error-border");
}

// Function to remove error message and highlight from the input field
function removeError(inputElement) {
    const errorElement = inputElement.nextElementSibling;
    errorElement.textContent = "";
    inputElement.classList.remove("error-border");
}

// Event listeners for form validation
fullNameInput.addEventListener("blur", validateFullName);
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);
confirmPasswordInput.addEventListener("blur", validateConfirmPassword);
ageInput.addEventListener("blur", validateAge);

// Event listener for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Run validation on form submission
    validateFullName();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
    validateAge();

    // If there are no errors, submit the form
    if (!form.querySelectorAll(".error").length) {
        alert("Form submitted successfully!");
        form.reset();
    }
});
