// Get the form and error message element
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

// Hardcoded credentials for demo purposes
const correctUsername = 'user123';
const correctPassword = 'password123';

// Add event listener for form submission
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    // Get username and password input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation 
    if (username === correctUsername && password === correctPassword) {
        // Simulate a successful login (redirect to the homepage)
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to the homepage
    } else {
        // Show error message
        errorMessage.style.display = 'block';
    }
});
