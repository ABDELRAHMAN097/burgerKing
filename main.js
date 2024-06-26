const products = document.querySelector(".productCont");
let items = [];
const cart = JSON.parse(localStorage.getItem("cart")) || [];
allProduct();
function addToCart(index) {
  const product = items[index];
  const obj = cart.find((ele) => ele.id == product.id);

  if (obj == undefined) {
    cart.push({ ...product, quantity: 1 });
  } else {      
    obj.quantity++;
  }
  
  console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
  //  sweet alert
Swal.fire({
  title: "تم اضافة المنتج !",
  text: "!اضغط للتخطي",
  icon: "success"
});
setTimeout(() => {
  Swal.close();
}, 2000);
}
function renderProducts(prod) {
  prod.forEach((el, idx) => {
    const discountedPrice = el.price * 0.8;
    products.innerHTML += `
    <div class="card">
    <img src="${el.thumbnail}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${el.title}</h5>
      <div class="d-flex gap-3 align-items-center jusify-content-center ">
      <div>
        <p class="card-text  fs-6 text-secondary" style="text-decoration: line-through;"> ${el.price}$</p>
        <p class="card-text  fs-6"> ${Math.ceil(discountedPrice)}$</p>
        </div>
      <a href="#" class="btn btn-outline-warning" onclick="addToCart(${idx})">
      <i class="fa-solid fa-cart-shopping"></i>
      </a>

      </div>

    </div>
  </div>
        `;
  });
}

function allProduct() {
  axios("https://dummyjson.com/products").then((data) => {
    renderProducts(data.data.products);
    items = data.data.products;
  });
}



