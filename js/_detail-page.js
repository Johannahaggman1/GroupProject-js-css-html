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

let testvin = 5;

// varukorg variabel satt för att kunna användas globalt
let order;
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

     order = {
         name: productName,
        price: productPrice,
        totalprice: productPriceTotal,
        amount: productAmount,
        sizes: {
            small: sizeS,
            medium: sizeM,
            large: sizeL,
            xlarge: sizeXL,
            },
        color: inputColor,
     }

     addProductToCart();

    // sätt in order i varukorg, sen sätt varukorg som en localStorage
/*     varukorg.push(order);
    localStorage.setItem("varukorg", JSON.stringify(varukorg));
    checkVarukorg = localStorage.getItem("varukorg");
    checkVarukorgObj = JSON.parse(checkVarukorg);
 */

    // pusha in objektet med produktinfo in i arrayen som är "varukorgen"
    // t.ex
/*     console.log(checkVarukorgObj);
    console.log("varukorgs lista:", varukorg); */

    function addProductToCart() {
        // Lägger till nytt värde i array istället för att ersätta den i localstorage.
        // Parse any JSON previously stored in allEntries
        var existingEntries = JSON.parse(localStorage.getItem("varukorg"));
        if(existingEntries == null) existingEntries = [], console.log("array skapad");
    
        let order = {
            name: productName,
           price: productPrice,
           totalprice: productPriceTotal,
           amount: productAmount,
           sizes: {
               small: sizeS,
               medium: sizeM,
               large: sizeL,
               xlarge: sizeXL,
               },
           color: inputColor,
        }
        localStorage.setItem("order", JSON.stringify(order));
        // Save allEntries back to local storage
        existingEntries.push(order);
        localStorage.setItem("varukorg", JSON.stringify(existingEntries));
        console.log(existingEntries);
    };
}

function append() {
    getDasVarukorg = localStorage.getItem("varukorg");
    getDasVarukorgObject = JSON.parse(getDasVarukorg);
    console.log(getDasVarukorgObject);

    // Alla värden ifrån localstorage varukorg
    let appendName = getDasVarukorgObject[0].name;
    let appendPrice = getDasVarukorgObject[0].price;
    let appendTotal = getDasVarukorgObject[0].totalprice;
    let appendAmount = getDasVarukorgObject[0].amount;
    let appendColor = getDasVarukorgObject[0].color;
    
    // Alla sizes appendade
    let appendSizeS = getDasVarukorgObject[0].sizes.small;
    let appendSizeM = getDasVarukorgObject[0].sizes.medium;
    let appendSizeL = getDasVarukorgObject[0].sizes.large;
    let appendSizeXL = getDasVarukorgObject[0].sizes.xlarge;
    

    appendDiv.append("name:" + appendName);
    appendDiv.append("price:" + appendPrice);
    appendDiv.append("total:" + appendTotal);
    appendDiv.append("amount:" + appendAmount);
    appendDiv.append("small:" + appendSizeS);
    appendDiv.append("medium:" + appendSizeM);
    appendDiv.append("large:" + appendSizeL);
    appendDiv.append("xlarge:" + appendSizeXL);
    appendDiv.append("color:" + appendColor);

    for (let i = 0; i < getDasVarukorgObject.length; i++) {
        
    }
}




    // console.log(testgetObj[0].name);

    /*  Skapa en lista för själva varukorgen som items blir
        pushade in inuti och så hålls den aktiv över alla sidor inuti
        script.js
        https://stackoverflow.com/questions/55328748/how-to-store-and-retrieve-shopping-cart-items-in-localstorage
            
        setItem()	Add key and value to local storage
        getItem()	Retrieve a value by the key
        removeItem()	Remove an item by key ( Använd till varukorg för att ta bort en product )
        clear()	Clear all storage
        
    */


    /* 
    When you use setItem it overwrites the item which was there before it. 
    You need to use getItem to retrieve the old list, append to it, then save it back to localStorage:
 */ 
