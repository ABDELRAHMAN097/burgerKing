const products = document.querySelector(".productCont");
let stor = [];
const cart = JSON.parse(localStorage.getItem("cart")) || [];

allProduct();
function addToCart(index) {
  const product = stor[index];
  const obj = cart.find((ele) => ele.id == product.id);
  if (obj == undefined) {
    cart.push({ ...product, quantity: 1 });
  } else {
    obj.quantity++;
  }
  console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
  // تنبيه حلو
  Swal.fire({
    title: "تم اضافة المنتج !",
    text: "!اضغط للتخطي",
    icon: "success",
  });
  setTimeout(() => {
    Swal.close();
  }, 1000);
}

function renderPro(data) {
  // Discount-section
  const lastThreeProducts = data.slice(-4);
  lastThreeProducts.forEach((el, idx) => {
    const discountedPrice = el.price - 20;
    products.innerHTML += `
      <div class="card">
      <img src="${el.thumbnail}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${el.title}</h5>
        <div class="d-flex gap-3 align-items-center justify-content-center">
        <div>
        <p class="card-text  fs-6 text-secondary" style="text-decoration: line-through;"> ${el.price}$</p>
        <p class="card-text  fs-6"> ${discountedPrice}$</p>
        </div>
       
          <a href="#" class="btn btn-outline-warning" onclick="addToCart(${stor.indexOf(el)})">
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </div>
    </div>
      `;
  });
}

function allProduct() {
  fetch("burger.json")
    .then((response) => response.json()) // تحويل الاستجابة إلى JSON
    .then((data) => {
      // التعامل مع البيانات
      stor = data;
      renderPro(data);
    })
    .catch((error) => {
      // التعامل مع أي أخطاء
      console.error("Error fetching the JSON file:", error);
    });
}
