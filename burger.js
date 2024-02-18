const products = document.querySelector(".productCont");
let stor = [];
const burger = JSON.parse(localStorage.getItem("burger")) || [];

allProduct();
function addToCart(index){
 const product = stor[index];
 const obj = burger.find((ele) => ele.id == product.id);

 if (obj == undefined) {
  burger.push({ ...product, quantity: 1 });
} else {      
  obj.quantity++;
}
  console.log(burger);
  localStorage.setItem("burger", JSON.stringify(burger));
}
function renderPro(data){
  data.forEach((el , idx) => {
    products.innerHTML += `
    <div class="card">
    <img src="${el.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${el.name}</h5>
      <p class="card-text">${el.price}</p>
      <a href="#" class="by btn btn-primary" onclick="addToCart(${idx})">By</a>
    </div>
  </div>
    `
  });
}
// Fetch the JSON file
function allProduct(){
  fetch('/burger.json')
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    // Handle the data
    renderPro(data)
  })
  .catch(error => {
    // Handle any errors
    console.error('Error fetching the JSON file:', error);
  });

}


// https://dummyjson.com/products
//https://forkify-api.herokuapp.com/api/search?q=pizza





























