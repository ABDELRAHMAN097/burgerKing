const products = document.querySelector(".productCont");
let items = [];
const cart = JSON.parse(localStorage.getItem('cart')) || [];
allProduct();
function addToCart(index) {
  const product = items[index];
  const obj = cart.find(ele => ele.id == product.id);
  if (obj == undefined) {
    cart.push({...product , quantity : 1});
  }else{
    obj.quantity++
  }
  console.log(cart);
  localStorage.setItem('cart' , JSON.stringify(cart))
};
function renderPro(prod) {
  prod.forEach((el, idx) => {
    products.innerHTML += `
    <div class="card">
    <img src="${el.thumbnail}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${el.title}</h5>
      <p class="card-text">${el.price}</p>
      <a href="#" class="by btn btn-primary" onclick="addToCart(${idx})">By</a>
    </div>
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
