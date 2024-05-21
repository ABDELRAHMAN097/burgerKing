const body = document.body;
function toggleDarkMood() {
    body.classList.toggle('dark-mood');
    const isDarkMode = body.classList.contains("dark-mood");
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    applyDarkMode();
  }
  
  function applyDarkMode() {
    const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    body.style.backgroundColor = isDarkMode ? "#333" : "#fff";
    td.forEach(cell => {
      cell.classList.toggle('dark-mood', isDarkMode);
      cell.style.backgroundColor = isDarkMode ? "#333" : "#fff";
    });
  }
  
  // تأكد من تطبيق الستايل الداكن إذا كان مفعل عند تحميل الصفحة
  document.addEventListener("DOMContentLoaded", () => {
    if (JSON.parse(localStorage.getItem("darkMode"))) {
      applyDarkMode();
    }
  });
  
  