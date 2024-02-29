
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // can add login logic
    if (username === "batman" && password === "111111111") {
      window.location.href = "food.html";
    } else {
      document.querySelector("#error").innerHTML =
        "Invalid username or password";
    }
  });

function togler() {
  var passwordInput = document.getElementById("password");
  let icone = document.querySelector("i");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }

  if (passwordInput.value !== "") {
    icone.classList.add("show"); 
  } else {
    icone.classList.add("hidden");
  }
}


