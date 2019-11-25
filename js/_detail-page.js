// parsing data from product to checkout 
// via selecting and pressing the button




/* Skapa en counter för varje gång man lägger till en produkt
så man kan ha en counter vid varukorgs ikonen som räknar hur många
produkter som finns i kundvagnen. */ 

const addProductBtn = document.querySelector("#detail-to-checkout");
addProductBtn.addEventListener('click', addToCart);
const appendDiv = document.querySelector(".append-here");

// variables set to fetch data from product-detail
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

// varukorg variabel satt för att kunna användas globalt
let order = [];
let varukorg = [ /* array */ ];

let testget;
let testgetObj;

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
    productPriceTotal = productAmount * productPrice;
    
    // färg hämtas via input radio den som är checked
    // white är default men uppdateras när man klickar på knappen
    var inputColor = document.querySelector('input[name=color]:checked').value;

     order = [
        {name: productName},
        {price: productPrice},
        {totalprice: productPriceTotal},
        {amount: productAmount},
        {sizes: {
            small: sizeS,
            medium: sizeM,
            large: sizeL,
            xlarge: sizeXL,
            }
        },
        {color: inputColor}
    ]

    // sätt in order i varukorg, sen sätt varukorg som en localStorage
    varukorg.push(order);
    localStorage.setItem("varukorg", JSON.stringify(varukorg));
    checkVarukorg = localStorage.getItem("varukorg");
    checkVarukorgObj = JSON.parse(checkVarukorg);


    // sätter ett localstorage och kan hämta ut värdet utan att få [obect object]
/*     localStorage.setItem("varukorg", JSON.stringify(order));
    testget = localStorage.getItem("varukorg");
    testgetObj = JSON.parse(testget);
    console.log(testgetObj); */
    

    // pusha in objektet med produktinfo in i arrayen som är "varukorgen"
    // t.ex
    console.log(checkVarukorgObj);
    console.log("varukorgs lista:", varukorg);
    console.log(varukorg[0][4]["sizes"].xlarge);
}

function append() {
    let appendName = varukorg[0][0]["name"];
    let appendPrice = varukorg[0][1]["price"];
    let appendTotal = varukorg[0][2]["totalprice"];
    let appendAmount = varukorg[0][3]["amount"];
    let appendColor = varukorg[0][5]["color"];

    appendDiv.append("name:" + appendName);
    appendDiv.append("price:" + appendPrice);
    appendDiv.append("total:" + appendTotal);
    appendDiv.append("amount:" + appendAmount);

    for (let i = 0; i < varukorg[0][4].length; i++) {
        storlekar = varukorg[0][4][i];
        console.log(storlekar);
        appendDiv.append("sizes:" + storlekar);
    }
    appendDiv.append("färg:" + appendColor);
}




    // console.log(testgetObj[0].name);

    /*  Skapa en lista för själva varukorgen som items blir
        pushade in inuti och så hålls den aktiv över alla sidor inuti
        script.js
        https://stackoverflow.com/questions/55328748/how-to-store-and-retrieve-shopping-cart-items-in-localstorage
            
        setItem()	Add key and value to local storage
        getItem()	Retrieve a value by the key
        removeItem()	Remove an item by key
        clear()	Clear all storage
        
    */
