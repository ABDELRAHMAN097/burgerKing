function renderControl(){
    let control = document.querySelector(".control")
    control.innerHTML =`
    <button class="col-lg-4">
    <i class="fa-solid fa-arrow-left-long" style="color: #747474"></i>
  </button>
  <div class="col-lg-4">
    <input type="text" />
    <i class="fa-solid fa-chevron-right" style="color: #747474"></i>
  </div>
  <div class="col-lg-4">
    <i
      class="fa-solid fa-magnifying-glass"
      style="color: #747474"
    ></i>
    <input id="serchInput" type="text" />
  </div>
    `
}
function sidenav(){
    let side = document.querySelector(".side-nav");
    side.innerHTML =`
    <div class="logo">
        <div class="icon">
          <i class="fa-solid fa-briefcase" style="color: #ff0000"></i>
        </div>
        <span>SmartPos</span>
      </div>
      <div class="links">
        <div class="page">
          <a href="dashboard.html"
            ><i class="fa-solid fa-chart-line" style="color: #747474"></i
            >Dashboard</a
          >
        </div>
        <div class="page">
          <a href="cart.html"
            ><i class="fa-solid fa-cart-shopping" style="color: #747474"></i
            >cart</a
          >
        </div>
        <div class="page">
          <a href="index.html"
            ><i class="fa-solid fa-burger" style="color: #747474"></i> Food
            &Drinks</a
          >
        </div>
        <div class="page">
          <a href=""
            ><i class="fa-solid fa-comments" style="color: #747474"></i>
            Message</a
          >
        </div>
        <div class="page">
          <a href=""
            ><i
              class="fa-solid fa-file-invoice-dollar"
              style="color: #747474"
            ></i>
            Bills</a
          >
        </div>
        <div class="page">
          <a href=""
            ><i class="fa-solid fa-gears" style="color: #747474"></i>
            Settings</a
          >
        </div>

        <h3 class="page">other</h3>

        <div class="page">
          <a href=""
            ><i class="fa-solid fa-envelope" style="color: #747474"></i>
            Notifications</a
          >
        </div>
        <div class="page">
          <a href=""
            ><i class="fa-solid fa-headset" style="color: #747474"></i>
            Support</a
          >
        </div>
      </div>
    `
}
renderControl();
sidenav()
export {renderControl}
export {sidenav}