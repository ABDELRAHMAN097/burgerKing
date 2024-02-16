const products = document.querySelector('table tbody');
const cart = JSON.parse(localStorage.getItem('cart')) || [];

renderPro(cart)


function increaseQuntty(id , btn){
  const obj = cart.find(product => product.id == id);
  obj.quantity++;
  console.log(btn)
}
function renderPro(prod) {
  prod.forEach((product) => {
    products.innerHTML += `
    <tr class="d-flex align-items-center justify-content-between ">
                <td>
                  <div class="d-flex gap-3 align-items-center">
                    <img class="CartImg" src="${product.thumbnail}"alt="product-photo">
                    <h4>${product.title}</h4>
                  </div>
                </td>

                <td>
                  <div class="cart-product-amount">
                    <span class="btn-quantity">-</span>
                    <span class="quantity">${product.quantity}</span>
                      <span class="btn-quantity" onclick=(${increaseQuntty(product.id)},this)>+</span>
                  </div>
                </td>

                <td>
                  <div class="column gap-3">
                    <span class="price">$${product.price}</span>
                    <span class="btn btn-danger">Remove</span>
                  </div>
                </td>
              </tr>
        `;
  });
}


  
