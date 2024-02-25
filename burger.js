const products = document.querySelector(".productCont");
let stor = [];
const cart = JSON.parse(localStorage.getItem("cart")) || []


allProduct();
function addToCart(index){
 const product = stor[index];
 const obj = cart.find((ele) => ele.id == product.id);
if(obj == undefined){
  cart.push({...product , quantity: 1 });
}else{
  obj.quantity++
}
 console.log(cart)
 localStorage.setItem("cart", JSON.stringify(cart));
//  sweet alert
Swal.fire({
  title: "تم اضافة المنتج !",
  text: "اضغط للتخطي!",
  icon: "success"
});
setTimeout(() => {
  Swal.close();
}, 1000);
}
function renderPro(data){
  data.forEach((el , idx) => {
    products.innerHTML += `
    <div class="card">
    <img src="${el.thumbnail}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${el.title}</h5>
      <p class="card-text">${el.price}</p>
      <a href="#" class="by btn btn-primary" onclick="addToCart(${idx})">Buy</a>
    </div>
  </div>
    `
  });
}
// Fetch the JSON file
function allProduct(){
  fetch('burger.json')
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    // Handle the data
    renderPro(data)
    stor = data
  })
  .catch(error => {
    // Handle any errors
    console.error('Error fetching the JSON file:', error);
  });

}


// https://dummyjson.com/products
//https://forkify-api.herokuapp.com/api/search?q=pizza





























