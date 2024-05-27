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
    body.style.color = isDarkMode ? "#fff" : "#000";

    // تحديد عناصر td و tr في الجدول
    const tableCells = document.querySelectorAll('table td');

    tableCells.forEach(cell => {
        cell.style.backgroundColor = isDarkMode ? "#333" : "#fff";
        cell.style.color = isDarkMode ? "#fff" : "#000"; // تغيير لون النص إلى الأبيض في الدارك مود
    });

    // تغيير لون النص والخلفية في lift-sidebar
    const sidebar = document.querySelector('.lift-sidebar');
    sidebar.style.backgroundColor = isDarkMode ? "#333" : "#fff";
    sidebar.style.color = isDarkMode ? "#fff" : "#000";

    // تغيير لون النص والخلفية في .page
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.backgroundColor = isDarkMode ? "#333" : "#fff";
        page.style.color = isDarkMode ? "#fff" : "#000";
    });

    // تغيير لون النص والخلفية في card-body
    const cardBodies = document.querySelectorAll('.card-body');
    cardBodies.forEach(cardBody => {
        cardBody.style.backgroundColor = isDarkMode ? "#333" : "#fff";
        cardBody.style.color = isDarkMode ? "#fff" : "#000";
    });
}

// تأكد من تطبيق الستايل الداكن إذا كان مفعل عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    if (JSON.parse(localStorage.getItem("darkMode"))) {
        applyDarkMode();
    }
});

// #########        ##################
const HideBar = document.querySelector('.Hide-bar');
const sideBar = document.querySelector('.lift-sidebar');

function toggleSidebar() {
    // تغيير حالة الشريط الجانبي
    sideBar.classList.toggle('show-sidebar');
}
