// Main script file som laddas in på alla sidor för att allt ska funka

// När användaren scrollar ner till 80px från toppen av dokumentet
// så görs naven om till ett fixed element med padding 

window.onscroll = function() {scrollFunction()};
let mainWrapper = document.querySelector("main");
let burgerCheckbox = document.querySelector(".checkbox-menu");
let checkedMenu;
let mobileToggle = document.querySelector("#menuToggle ");
let wrapper;

burgerCheckbox.addEventListener("click", burgerMenu);

function scrollFunction() {
  let navbar = document.querySelector("#navbar");
  let burgermenu = document.querySelector("#burger-mobile");
  wrapper = document.querySelector("main");
  checkedMenu = burgerCheckbox.checked;

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 && checkedMenu === false) {

    navbar.classList.add("small-nav");
    wrapper.classList.add("nav-fixer");
    burgermenu.classList.add("nav-burger-fixer");
    console.log(checkedMenu);

  } else {
    navbar.classList.remove("small-nav");
    wrapper.classList.remove("nav-fixer");
    burgermenu.classList.remove("nav-burger-fixer");
    console.log(checkedMenu);
  }
}

function burgerMenu() {
  let checkedMenu = burgerCheckbox.checked;
  if (checkedMenu === true) {
    wrapper.classList.add("overflow-hidden");
    mobileToggle.classList.add("overflow-y-hidden");
      console.log("True! overflow ADDED");
  } else {
    wrapper.classList.remove("overflow-hidden");
    mobileToggle.classList.remove("overflow-y-hidden");
    console.log("False! overflow REMOVED");
  }
}