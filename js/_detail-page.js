// parsing data from product to checkout 
// via selecting and pressing the button




/* Skapa en counter för varje gång man lägger till en produkt
så man kan ha en counter vid varukorgs ikonen som räknar hur många
produkter som finns i kundvagnen. */ 

const addProductBtn = document.querySelector("#detail-to-checkout");

addProductBtn.addEventListener('click', addToCart);

let productName;
let productPrice;
let productCurrency;
let productColor;

// sizes 
let productAmount;
let prodSizeS;
let prodSizeM;
let prodSizeL;
let prodSizeXL;

function addToCart() {

    // hämta värden ifrån alla inputs 
    productName = document.querySelector("#productname").innerHTML;
    productPrice = document.querySelector("#productprice").innerHTML;



    // antal sizes hämtas ifrån deras inputs 
    prodSizeS = document.querySelector("#size-S").value;
    prodSizeM = document.querySelector("#size-M").value;
    prodSizeL = document.querySelector("#size-L").value;
    prodSizeXL = document.querySelector("#size-XL").value;

    // Konvertera alla strings till number 
    sizeS = Number(prodSizeS);
    sizeM = Number(prodSizeM);
    sizeL = Number(prodSizeL);
    sizeXL = Number(prodSizeXL);

    // hämtar antal produkter tillagda (viktigt att dem är number)
    productAmount = sizeS + sizeM + sizeL + sizeXL;

    // färg hämtas via input radio den som är checked
    // white är default men uppdateras när man klickar på knappen
    var inputColor = document.querySelector('input[name=color]:checked').value;


    // spotta ut allt i console för att se så du hämtar korrekt data.
/*     console.log("Product name:", productName);
    console.log("Product price:", productPrice);
    console.log("small:", sizeS);
    console.log("medium:", sizeM);
    console.log("large:", sizeL);
    console.log("x-large:", sizeXL);
    console.log("total products:", productAmount);
    console.log("Selected color:", inputColor); */

    let order = {
        "name": productName,
        "price": productPrice,
        "amount": productAmount,
        "sizes": {
            "small": sizeS,
            "medium": sizeM,
            "large": sizeL,
            "xlarge": sizeXL,
        },
        "color": inputColor,
    };

    console.log(order.name, order.price, order.amount, order.sizes, order.color);

    // sätter localstorage (skicka helst iväg ett helt objekt med värden inuti
    // så man kan skicka flera och ingen kolliderar med varann.)
    localStorage.setItem("productName", order.name);
    localStorage.setItem("productPrice", order.price);
    localStorage.setItem("productColor", order.color);
}





// ifrån PoC javascript-testing projektet. 

function switchPage() {
    checkSizes()
    window.document.location="./checkout.html";
}
