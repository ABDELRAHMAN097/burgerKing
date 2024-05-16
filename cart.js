const products = document.querySelector("table tbody");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCont = document.querySelector('.cartCont');
const price = document.querySelector('.price');
const body = document.body;
const td = document.querySelectorAll("td");

// استرجاع حالة الـ Dark Mode من الـ localStorage عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
  if (isDarkMode) {
    applyDarkMode();
  }
});

function removeAll(){
  cart = [];
  checkEmptyCart();
  saveCart();
}

function checkEmptyCart(){
  if(cart.length == 0){
    cartCont.innerHTML = `<h3 class='text-center'>cart is empty</h3>`;
  }
}

function increaseProduct(id, btn) {
  const obj = cart.find((product) => product.id == id);
  obj.quantity++;
  const parent = btn.closest(".cart-product-amount");
  const quantityElement = parent.querySelector(".quantity");
  quantityElement.innerHTML = obj.quantity;
  
  const priceElement = parent.closest("tr").querySelector(".price");
  priceElement.innerHTML = `$${(obj.price * obj.quantity).toFixed(2)}`;

  saveCart();
}

function decreaseProduct(id, btn) {
  const obj = cart.find((product) => product.id == id);
  const parent = btn.closest(".cart-product-amount");
  const quantityElement = parent.querySelector(".quantity");
  if(obj.quantity > 1){
    obj.quantity--;
    quantityElement.innerHTML = obj.quantity;

    const priceElement = parent.closest("tr").querySelector(".price");
    priceElement.innerHTML = `$${(obj.price * obj.quantity).toFixed(2)}`;

    saveCart();
  }
}

function removeproduct(id , btn){
  cart = cart.filter(product => product.id != id);
  const productElement = btn.closest('.cart-product');
  productElement.remove();
  checkEmptyCart();
  saveCart();
  Swal.fire({
    title: "تم حذف المنتج !",
    text: "!اضغط للتخطي",
    icon: "error"
  });
  setTimeout(() => {
    Swal.close();
  }, 2000);
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderProducts(prod) {
  products.innerHTML = ''; // Clear existing products
  prod.forEach((product) => {
    products.innerHTML += `
    <tr class="cart-product ">
      <td>
        <div class="img-product">
          <img class="CartImg" src="${product.thumbnail}" alt="product-photo">
          <h4 class="cart-title">${product.title}</h4>
        </div>
      </td>

      <td class="counter">
        <div class="cart-product-amount">
          <span class="btn-quantity" onclick="decreaseProduct(${product.id}, this)">-</span>
          <span class="quantity">${product.quantity}</span>
          <span class="btn-quantity" onclick="increaseProduct(${product.id}, this)">+</span>
        </div>
      </td>

      <td>
        <div class="column gap-3">
          <span class="price">$${(product.price * product.quantity).toFixed(2)}</span>
          <span class="btn btn-danger" onclick="removeproduct(${product.id}, this)">Remove</span>
        </div>
      </td>
    </tr>
    `;
  });
}

function renderPro(data) {
  products.innerHTML = ''; // Clear existing products
  data.forEach((el) => {
    products.innerHTML += `
    <tr class="cart-product ">
      <td>
        <div class="img-product">
          <img class="CartImg" src="${el.img}" alt="product-photo">
          <h4 class="cart-title">${el.name}</h4>
        </div>
      </td>

      <td class="counter">
        <div class="cart-product-amount">
          <span class="btn-quantity" onclick="decreaseProduct(${el.id}, this)">-</span>
          <span class="quantity">${el.quantity}</span>
          <span class="btn-quantity" onclick="increaseProduct(${el.id}, this)">+</span>
        </div>
      </td>

      <td>
        <div class="column">
          <span class="price">$${(el.price * el.quantity).toFixed(2)}</span>
          <span class="btn btn-danger" onclick="removeproduct(${el.id}, this)">Remove</span>
        </div>
      </td>
    </tr>
    `;
  });
}

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

renderProducts(cart);
checkEmptyCart();
