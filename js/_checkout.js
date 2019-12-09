// Checkout JS

// localStorage värden
let checkVarukorg = localStorage.getItem("varukorg"); 
let checkVarukorgObject = JSON.parse(checkVarukorg);

// Wrappers
let checkoutWrapper = document.querySelector(".items-wrapper");

// Värden
let productDiv = document.querySelector(".product-name");
let sizeDivS = document.querySelector(".size-s");
let sizeDivM = document.querySelector(".size-m");
let sizeDivL = document.querySelector(".size-l");
let sizeDivXL = document.querySelector(".size-xl");
let colorDiv = document.querySelector(".color");
let priceDiv = document.querySelector(".price");
let totalPriceDiv = document.querySelector(".total-price");
let totalPriceProd = 0;

// mer värden
let objectName;
let objectSizeS;
let objectSizeM;
let objectSizeL;
let objectSizeXL;
let objectColor;
let objectPrice;
let objectTotalPrice;

// knappar
let deleteBtn = document.querySelector(".delete-btn");
let checkoutBtn = document.querySelector("#pay-btn");

// Eventlistner

let totalPriceValue = totalPriceDiv.innerHTML;



// Vänta tills sidan laddar sen kör funktionen GetVarukorg();
window.addEventListener('load', (GetVarukorg) => {
    console.log('page is fully loaded');
    // Översätt stringify versionen av varukorgen till ett object.

    // Loopa ut alla varukorgs object in i dess rätta div.
    for (let i = 0; i < checkVarukorgObject.length; i++) {

        objectName = checkVarukorgObject[i].name;
        objectSizeS = checkVarukorgObject[i].sizes.small;
        objectSizeM = checkVarukorgObject[i].sizes.medium;
        objectSizeL = checkVarukorgObject[i].sizes.large;
        objectSizeXL = checkVarukorgObject[i].sizes.xlarge;
        objectColor = checkVarukorgObject[i].color;
        objectPrice = checkVarukorgObject[i].price;
        objectTotalPrice = checkVarukorgObject[i].totalprice;

        

        let varukorgProduct = document.createElement("div");
        varukorgProduct.className = "checkout-item-" + i + " checkout-items";
        varukorgProduct.innerHTML = 
        "<li class='flex-items'><h4>Product:</h4><span class='product-name'>" + objectName + "</span></li>"
        + "<ul class='size-inputs'>"
        + "<li>Small: <a href='#' class='decrease'><i class='fas fa-minus-circle'></i></a> <span class='size-s'>" + objectSizeS + "</span> <a href='#' class='add'><i class='fas fa-plus-circle'></i></a></li>"
        + "<li>Medium: <a href='#' class='decrease'><i class='fas fa-minus-circle'></i></a> <span class='size-m'>" + objectSizeM + "</span> <a href='#' class='add'><i class='fas fa-plus-circle'></i></a></li>"
        + "<li>Large: <a href='#' class='decrease'><i class='fas fa-minus-circle'></i></a> <span class='size-l'>" + objectSizeL + "</span> <a href='#' class='add'><i class='fas fa-plus-circle'></i></a></li>"
        + "<li>X-Large: <a href='#' class='decrease'><i class='fas fa-minus-circle'></i></a> <span class='size-xl'>" + objectSizeXL + "</span> <a href='#' class='add'><i class='fas fa-plus-circle'></i></a></li>"
        + "</ul>"
        + "<li class='flex-items'> <h4>Color:</h4><span class='color'>" + objectColor + "</span></li>"
        + "<li class='flex-items'> <h4>Price:</h4> <span class='price'>" + objectTotalPrice + "</span></li>"
        + "<a class='delete-btn' onclick='removeFromCart(this);'> <img class='delete-btn-img' src='../images/delete.svg' alt='delete'</a>"
        ;
        checkoutWrapper.append(varukorgProduct);


    }// loop slut

    // utanför loopen så funktionen inte körs 2 gånger
    totalPriceCost();
}); // GetVarukorg() slut 


function merge() {
    
    if (objectColor === "blue") {
        console.log(objectColor);
        console.log("SANT");
    } else {
        console.log(objectColor);
        console.log("FALSKT");
        
    }

    console.log(objectName);

}




function totalPriceCost() {
    let newTotalPriceProd;
    for (let i = 0; i < checkVarukorgObject.length; i++) {
        totalPriceProd += parseInt(checkVarukorgObject[i].totalprice);
        newTotalPriceProd = Number(totalPriceProd);
    }
    
    totalPriceDiv.append(totalPriceProd);
}

function removeFromCart(btn){
    // hämta nytt värde ifrån den satta variabeln med localStorage; 
    checkVarukorgObject;
    ((btn.parentNode).parentNode).removeChild(btn.parentNode);
    console.log("DELETE!");

    checkVarukorgObject.pop(btn);
    localStorage.setItem("varukorg", JSON.stringify(checkVarukorgObject));
    return checkVarukorgObject;

    // skapa en kodrad som targetar btn som är då diven som man klickar X:et på, 
    // men den måste kunna gå in i localStorage och ta bort den specifika.

    // Ta bort värdet så inte det går att hämta t.ex amount ifrån "PurchaseOrder()"

    // Behövs kanske ej om man hämtar alla divar som är kvar till fakturan.
    // localStorage.removeItem(); 

    // om man klickar på X så ska respektive div som har X:et som blir 
    // nedtryckt ska då .shift ifrån varukorgslistan samt ta bort diven.

    totalPriceCost();
}


// När kunden klickar på "Genomför köp" - knappen
function PurchaseOrder() {

    let totalNames = '';
    let totalAmountProd = 0;
    let totalPriceProd = 0;
    let totalColors = '';
    // HÄMTAR DOCK VIA LOCALSTORAGE OCH INTE VIA DIVARNA PÅ CHECKOUTSIDAN (vilket vi vill?)
    for (let i = 0; i < checkVarukorgObject.length; i++) {

        totalNames += checkVarukorgObject[i].name + ", ";
        totalAmountProd += parseInt(checkVarukorgObject[i].amount);
        totalPriceProd += parseInt(checkVarukorgObject[i].totalprice);
        totalColors += checkVarukorgObject[i].color + ", ";

    }
    console.log("Namn på alla produkter:" + totalNames);
    console.log("Totala mängd produkter:" + totalAmountProd);
    console.log("Totalt pris på beställningar:" + totalPriceProd);
    console.log("Alla färger " + totalColors);

        // Lägg ihop alla värden till en variabel

    // HÄMTAR FÖR TILLFÄLLET BARA FÖRSTA DIVEN!!!!!!!
    // ifall kunden har lagt till eller tagit bort produkter så måste vi kunna se det.
    newProdSizeS = document.querySelector(".size-s").innerHTML;
    newProdSizeM = document.querySelector(".size-m").innerHTML;
    newProdSizeL = document.querySelector(".size-l").innerHTML;
    newProdSizeXL = document.querySelector(".size-xl").innerHTML;
    newColor = document.querySelector(".color").innerHTML;

    // Hämtar alla divar på checkoutsidan !!! YEEEES!
    for (let i = 0; i < checkVarukorgObject.length; i++) {
        newArray = document.querySelector(".checkout-item-" + [i]);
        console.log(newArray);
    }

    // Gör om till number istället för string
    let newSizeS = Number(newProdSizeS);
    let newSizeM = Number(newProdSizeM);
    let newSizeL = Number(newProdSizeL);
    let newSizeXL = Number(newProdSizeXL);

    // sammanlagd totalt antal
    newAmountTotal = newSizeS + newSizeM + newSizeL + newSizeXL;

    // Den nya vi ska pusha upp till faktura (Måste fakturan vara på samma sida?!)
    fakturaOrder = {
        small: newProdSizeS,
        medium: newProdSizeM,
        large: newProdSizeL,
        xlarge: newProdSizeXL,
        color: newColor,
        amount: newAmountTotal,
    };

    console.log(fakturaOrder);

    /* 
    localStorage.clear(); // Tar bort all localStorage */

    /* Ens "varukorg" localstorage försvinner, är det då smart att lägga fakturaOrder som
    tillfälligt localstorage endast för faktura sidan och sen när man har laddat ner den eller
    bytt sida så clearas den" 
    */ 
    console.log("Beställning lagd");

}
