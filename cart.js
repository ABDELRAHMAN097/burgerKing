const products = document.querySelector("table tbody");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cats = JSON.parse(localStorage.getItem("cats")) || []

const cartCont = document.querySelector('.cartCont');
renderPro(cart);

console.log(cartCont)


function increaseProduct(id, btn) {
  const obj = cart.find((product) => product.id == id);
  obj.quantity++;
  const parent = btn.closest(".cart-product-amount");
  const quantityElement = parent.querySelector(".quantity");
  quantityElement.innerHTML = obj.quantity;
  saveCart();
}
function decreaseProduct(id, btn) {
  const obj = cart.find((product) => product.id == id);
  obj.quantity--;
  const parent = btn.closest(".cart-product-amount");
  const quantityElement = parent.querySelector(".quantity");
  quantityElement.innerHTML = obj.quantity;
  if(obj.quantity < 1){
    quantityElement.innerHTML = 1;
  saveCart();
  }
  saveCart();
}

function removeproduct(id , btn){
  cart = cart.filter(product => product.id != id);
  const productElement = btn.closest('.cart-product')
  productElement.remove();
  saveCart();
  Swal.fire({
    title: "تم حذف المنتج !",
    text: "اضغط للتخطي!",
    icon: "error"
  });
  setTimeout(() => {
    Swal.close();
  }, 2000);
}
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function renderPro(prod) {
  prod.forEach((product) => {
    products.innerHTML += `
    <tr class="cart-product">
                <td>
                  <div class="img-product">
                    <img class="CartImg" src="${product.thumbnail}"alt="product-photo">
                    <h4>${product.title}</h4>
                  </div>
                </td>

                <td class="counter">
                  <div class="cart-product-amount">
                    <span class="btn-quantity" onclick="decreaseProduct(${product.id} , this)">-</span>
                    <span class="quantity">${product.quantity}</span>
                      <span class="btn-quantity" onclick="increaseProduct(${product.id} , this)">+</span>
                  </div>
                </td>

                <td>
                  <div class="column gap-3">
                    <span class="price">$${product.price}</span>
                    <span class="btn btn-danger" onclick="removeproduct(${product.id} , this)">Remove</span>
                  </div>
                </td>
              </tr>
        `;
  });
}
