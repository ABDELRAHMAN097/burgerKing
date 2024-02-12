const products = document.querySelector('table tbody');
const cart = JSON.parse(localStorage.getItem('cart')) || [];

renderPro(cart)
function renderPro(prod) {
  prod.forEach((el,idx) => {
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


  
