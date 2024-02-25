document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Here you can add your login logic, such as checking credentials against a database
    if(username === 'batman' && password === '111111111'){
      window.location.href = 'food.html';
    
    }else{
      document.querySelector('#error').innerHTML = 'Invalid username or password'
    }
  });

  function togler() {
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }
  let icone = document.querySelector('i');
  // var password = document.getElementById('password').value;
  // if(password === ""){
  //   icone.style.display = "none";
  // }if(password > ""){
  //   icone.style.display = "block";
  // }
console.log(icone)

