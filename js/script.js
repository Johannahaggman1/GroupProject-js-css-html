// Main script file som laddas in på alla sidor för att allt ska funka

// När användaren scrollar ner till 80px från toppen av dokumentet
// så görs naven om till ett fixed element med padding 

// kallar på en funktion vid varje scrollEvent
window.onscroll = function() {scrollFunction()};

// Sätter upp globala variablar för divar som ska användas.
let mainWrapper = document.querySelector("main");
let burgerCheckbox = document.querySelector(".checkbox-menu");
let mobileToggle = document.querySelector("#menuToggle");
let bodyWrapper = document.querySelector("body");
let checkedMenu;

// FÅ NOTIS I VARUKORGEN NÄR DET FINNS ETT ITEM I VARUKORGS ARRAYEN
// Blev en "Nice to have grej"
let hasStorage = localStorage.getItem("varukorg");
let hasStorageObject = JSON.parse(hasStorage);


// Knapp lyssnare som kallar på funktionen när man klickar på burgermenu checkboxen
burgerCheckbox.addEventListener("click", burgerMenu);


// scroll funktionen som kollar hur långt man har scrollat på sidan. 
function scrollFunction() {
  let navbar = document.querySelector("#navbar");
  let burgermenu = document.querySelector("#burger-mobile");
  checkedMenu = burgerCheckbox.checked;

  // Om man har scrollat förbi 80px (height-storleken på vår navbar) lägg till massa klasser
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

    // Lägg till klasser på divar som gör att navbaren hänger med när man scrollar (istället för position fixed)
    navbar.classList.add("small-nav");
    
    // Denna är ett litet hax, då navbaren hopppar ifrån position relative, till fixed så försvinner då dess height vilket gör
    // att hela dokumentet hoppar upp 80px vilket blir hackigt. Denna klass ersätter det saknade utrymmet med en margin-top: 80px;
    // för att få det att vara "smooooth"
    mainWrapper.classList.add("nav-fixer");
    burgermenu.classList.add("nav-burger-fixer");

    // Om du inte har scrollat förbi 80px, eller om du har scrollat tillbaka till toppen
    // Ta bort alla klasser så att navbaren fastnar på toppen igen. 
  } else {
    navbar.classList.remove("small-nav");
    mainWrapper.classList.remove("nav-fixer");
    burgermenu.classList.remove("nav-burger-fixer");
  }
}

// Ifall burgarmenyn (i mobilvy) är checked så lägg till en klass på bodyn så man inte kan scrolla.
// Om den inte är checked så ta bort klassen ifrån bodyn ifall den finns så att man kan scrolla på sidan när menyn är nedstängd.
function burgerMenu() {
  let checkedMenu = burgerCheckbox.checked;
  if (checkedMenu === true) {
    bodyWrapper.classList.add("stop-scrolling");
  } else {
    bodyWrapper.classList.remove("stop-scrolling");
  }
}

// skapa produkt variablar som printas ut när sidan laddar

// alla produkter i en array
let allProducts;

// produkterna
let productOne;
let productTwo;
let productThree;
let productFour;

let productCard;
let prodListWrapper = document.querySelector(".product-list-wrapper");

productOne = {
    name: 'Printee T-shirt',
    price: '100kr',
    image: 'https://images-ext-1.discordapp.net/external/hpzdtdYUUH2TMstu1seUoD4b7S_ERS4PbR5x-Zwkxmk/%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26auto%3Dformat%26fit%3Dcrop%26w%3D1100%26q%3D80/https/images.unsplash.com/photo-1521572163474-6864f9cf17ab?width=585&height=585',
/*     image: 'https://images.unsplash.com/photo-1553754538-466add009c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1495&q=80', */
    link: '../pages/product-detail.html',
    colors: {
      blue: "blue",
      white: "white",
      gray: "gray",
      black: "black",
      orange: "orange"
    }
}


allProducts = [
    productOne
];

