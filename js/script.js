// Main script file som laddas in på alla sidor för att allt ska funka

// När användaren scrollar ner till 80px från toppen av dokumentet
// så görs naven om till ett fixed element med padding 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let navbar = document.querySelector("#navbar");
    let wrapper = document.querySelector("main");
    let burgermenu = document.querySelector("#burger-mobile");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add("small-nav");
    wrapper.classList.add("nav-fixer");
    burgermenu.classList.add("nav-burger-fixer");
  } else {
    navbar.classList.remove("small-nav");
    wrapper.classList.remove("nav-fixer");
    burgermenu.classList.remove("nav-burger-fixer");
  }
}