const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");
const sections = document.querySelectorAll("section");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
  sections.forEach((section) => {
    const min_height = 200;
    const max_height = section.offsetHeight - min_height;
    var scroll_position = section.getBoundingClientRect().top;
    if (scroll_position > -max_height && scroll_position < min_height) {
      document.querySelector(`.${section.id}`).style.color = "crimson";
    } else {
      document.querySelector(`.${section.id}`).style.color = "white";
    }
  });
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});
