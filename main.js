const products = document.querySelector(".products");
let items = [];
const cart = JSON.parse(localStorage.getItem('cart')) || [];
allProduct();
function addToCart(index) {
  const product = items[index];
  const obj = cart.find(ele => ele.id == product.id);
  if (obj == undefined) {
    cart.push({...product , quntty : 1});
  }else{
    obj.quntty++
  }
  console.log(cart);
  localStorage.setItem('cart' , JSON.stringify(cart))
};
function renderPro(prod) {
  prod.forEach((el, idx) => {
    products.innerHTML += `
        <div class="card">
              <img src="${el.thumbnail}" alt="">
              <span>${el.title}</span>
              <p>${el.price}</p>
              <p>price after discound</p>
              <button class="btn btn-primary w-100 add-to-cart" onclick="addToCart(${idx})">Add To Cart</button>
        </div>
        `;
  });
}

function allProduct() {
  axios("https://dummyjson.com/products").then((data) => {
    renderPro(data.data.products);
    items = data.data.products;
  });
}
