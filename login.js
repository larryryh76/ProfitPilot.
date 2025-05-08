const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Reset error styles
  emailInput.classList.remove('error');
  passwordInput.classList.remove('error');
  document.getElementById('email-error').textContent = '';
  document.getElementById('password-error').textContent = '';

  // Validate input fields
  if (!email || !password) {
    if (!email) {
      emailInput.classList.add('error');
      document.getElementById('email-error').textContent = 'Please enter your email';
    }
    if (!password) {
      passwordInput.classList.add('error');
      document.getElementById('password-error').textContent = 'Please enter your password';
    }
  } else if (!validateEmail(email)) {
    emailInput.classList.add('error');
    document.getElementById('email-error').textContent = 'Invalid email format';
  } else if (!validatePassword(password)) {
    passwordInput.classList.add('error');
    document.getElementById('password-error').textContent = 'Password must be more than 8 characters long and include both uppercase and lowercase letters';
  } else {
    // Send login request to server
    console.log('Login attempt:', email, password);
  }
});
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{9,}$/;
  return passwordRegex.test(password);
}