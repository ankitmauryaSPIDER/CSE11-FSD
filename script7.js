function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
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

  // Email Validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid Email ID (e.g., name@domain.com).");
    return false;
  }

  // Phone Number Validation
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Phone number must contain exactly 10 digits.");
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
