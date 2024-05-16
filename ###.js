
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
// dashboard
document.addEventListener("DOMContentLoaded", function() {
  // Sample data for charts
  var lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
          label: 'Sales',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
      }]
  };

  var barData = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  };

  var pieData = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: 'My First Dataset',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  };

  // Create line chart
  var lineCtx = document.getElementById('lineChart').getContext('2d');
  var lineChart = new Chart(lineCtx, {
      type: 'line',
      data: lineData
  });

  // Create bar chart
  var barCtx = document.getElementById('barChart').getContext('2d');
  var barChart = new Chart(barCtx, {
      type: 'bar',
      data: barData
  });

  // Create pie chart
  var pieCtx = document.getElementById('pieChart').getContext('2d');
  var pieChart = new Chart(pieCtx, {
      type: 'pie',
      data: pieData
  });
});


