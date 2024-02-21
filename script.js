document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Here you can add your login logic, such as checking credentials against a database
    if (username === 'batman' && password === '111111111') {
      // Login successful, redirect or show success message
      window.location.href = 'food.html';
    } else {
      // Login failed, display error message
      document.getElementById('error').innerText = 'Invalid username or password';
    }
  });