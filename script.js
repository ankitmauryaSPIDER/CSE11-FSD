function validateForm() {
  const name = document.getElementById("name").value.trim();
  const password = document.getElementById("password").value.trim();

  // Name Validation
  const nameRegex = /^[A-Za-z ]+$/;
  if (name.length < 6) {
    alert("Name must be at least 6 characters long.");
    return false;
  }
  if (!nameRegex.test(name)) {
    alert("Name should contain only alphabets.");
    return false;
  }

  // Password Validation
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }

  // Success Message
  alert("✅ Registration Successful! Welcome to ABES Online Book Store!");
  return true;
}
