const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".header__menu-block");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger-menu_active");
  menu.classList.toggle("header__menu-block_active");
});


