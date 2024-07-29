// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika shopping bag di klik
document.querySelector("#shopping-bag").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const shoppingBag = document.querySelector("#shopping-bag");

document.addEventListener("click", function (e) {
  if (!shoppingBag.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
