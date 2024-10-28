function validateForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  errorMessage.textContent = "";

  if (email.trim() === "") {
      errorMessage.textContent = "Email is required.";
      return false;
  }

  if (password.trim() === "") {
      errorMessage.textContent = "Password is required.";
      return false;
  }

  if (password.length < 6) {
      errorMessage.textContent = "Password must be at least 6 characters.";
      return false;
  }

  return true; // Form is valid
}
