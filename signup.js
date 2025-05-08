const signupForm = document.getElementById('signup-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
  
    // Reset error styles
    usernameInput.classList.remove('error');
    emailInput.classList.remove('error');
    passwordInput.classList.remove('error');
    confirmPasswordInput.classList.remove('error');
    document.getElementById('username-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('confirm-password-error').textContent = '';
  
    // Validate input fields
    if (!username || !email || !password || !confirmPassword) {
      if (!username) {
        usernameInput.classList.add('error');
        document.getElementById('username-error').textContent = 'Please enter a username';
      }
      if (!email) {
        emailInput.classList.add('error');
        document.getElementById('email-error').textContent = 'Please enter an email';
      }
      if (!password) {
        passwordInput.classList.add('error');
        document.getElementById('password-error').textContent = 'Please enter a password';
      }
      if (!confirmPassword) {
        confirmPasswordInput.classList.add('error');
        document.getElementById('confirm-password-error').textContent = 'Please confirm your password';
      }
    } else if (!validateEmail(email)) {
      emailInput.classList.add('error');
      document.getElementById('email-error').textContent = 'Invalid email format';
    } else if (!validatePassword(password)) {
      passwordInput.classList.add('error');
      document.getElementById('password-error').textContent = 'Password must be more than 8 characters long and include both uppercase and lowercase letters';
    } else if (password !== confirmPassword) {
      confirmPasswordInput.classList.add('error');
      document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
    } else {
      // Send signup request to server
      console.log('Signup attempt:', username, email, password);
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
// Send signup request to server
console.log('Signup attempt:', username, email, password);

// You can replace the console.log with an actual fetch request to your server
fetch('/signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username, email, password }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

