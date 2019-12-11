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
let newArray = [];
let fakturaValue;
let existingEntries;

// knappar
let deleteBtn = document.querySelector(".delete-btn");
let checkoutBtn = document.querySelector("#pay-btn");

// Eventlistner

let totalPriceValue = totalPriceDiv.innerHTML;



// Vänta tills sidan laddar sen kör funktionen GetVarukorg();
window.addEventListener('load', (GetVarukorg) => {
    console.log('page is fully loaded');
    // Översätt stringify versionen av varukorgen till ett object.


    // LÄGG IN I FOREACH FUNKTION SÅ DEN KATEGORISERAS
/*     if (checkVarukorgObject[0].color = "blue") {
        console.log("slå ihop blåa")
    }

    if (checkVarukorgObject[0].color == "orange") {
        console.log("slå ihop orange")
    } */


    checkVarukorgObject.forEach(function (element, i) {

        objectName = element.name;
        objectSizeS = element.sizes.small;
        objectSizeM = element.sizes.medium;
        objectSizeL = element.sizes.large;
        objectSizeXL = element.sizes.xlarge;
        objectColor = element.color;
        objectPrice = element.price;
        objectTotalPrice = element.totalprice;
        objectAmount = element.amount;
        
 /*          console.log("värdet: " + i);
      let hejhejblue = i;

        hejhejblue++ */
        // Checka med (i) ifall den är > 1 för då finns det mer än 1 som har samma.

        if (element.color == "blue") {
            appendItem();
            // console.log(hejhejblue)
        } else {
        }

        if (element.color == "orange") {
            appendItem();
        } else {
        }

        if (element.color == "white") {
            appendItem();
        } else {
        }

        if (element.color == "gray") {
            appendItem();
        } else {
        }

        if (element.color == "black") {
            appendItem();
        } else {
        }

        function appendItem() {
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

            newArray.push(varukorgProduct);
        }


    });

    for (let i = 0; i < newArray.length; i++) {
        totalPriceProd += parseInt(checkVarukorgObject[i].totalprice);
    }
    totalPriceDiv.append(totalPriceProd);

}); // GetVarukorg() slut 


function updateTotalPrice() {
    totalPriceProd;
    console.log(totalPriceProd);

    let newTotalPrice = totalPriceProd - getPrice;
    console.log("getPrice: " + getPrice);
    console.log("totalPriceProd: " + totalPriceProd);
    console.log("new Total Price: " + newTotalPrice);
    totalPriceDiv.innerHTML = "";
    totalPriceDiv.append(newTotalPrice);
    totalPriceProd = newTotalPrice;
}

function removeFromCart(btn){
    getPrice = btn.parentNode.querySelector(".price").innerHTML;
    console.log(getPrice);

    updateTotalPrice(getPrice);
    
    // hämta nytt värde ifrån den satta variabeln med localStorage; 
    checkVarukorgObject;
    ((btn.parentNode).parentNode).removeChild(btn.parentNode);
    console.log("DELETE!");
    checkVarukorgObject.pop(btn);
    newArray.pop(btn);
    localStorage.setItem("varukorg", JSON.stringify(checkVarukorgObject));
}


// När kunden klickar på "Genomför köp" - knappen
function PurchaseOrder() {
    localStorage.removeItem("faktura");

    //let totalNames = '';
    let totalAmountProd = 0;
    let totalPriceProd = 0;
    let totalColors = '';
    // HÄMTAR DOCK VIA LOCALSTORAGE OCH INTE VIA DIVARNA PÅ CHECKOUTSIDAN (vilket vi vill?)
    for (let i = 0; i < newArray.length; i++) {

        //totalNames += checkVarukorgObject[i].name + ", ";
        totalAmountProd += parseInt(checkVarukorgObject[i].amount);
        totalPriceProd += parseInt(checkVarukorgObject[i].totalprice);
        totalColors += checkVarukorgObject[i].color + ", ";

    }

    //console.log("Namn på alla produkter:" + totalNames);
    console.log("Totala mängd produkter:" + totalAmountProd);
    console.log("Totalt pris på beställningar:" + totalPriceProd);
    console.log("Alla färger " + totalColors);

    newArray.forEach(element => {
        console.log(element);
        newColor = element.querySelector(".color").innerHTML;
        newSizeS = element.querySelector(".size-s").innerHTML;
        newSizeM = element.querySelector(".size-m").innerHTML;
        newSizeL = element.querySelector(".size-l").innerHTML;
        newSizeXL = element.querySelector(".size-xl").innerHTML;
        newProdPrice = element.querySelector(".price").innerHTML;

        convertSizeS = Number(newSizeS);
        convertSizeM = Number(newSizeM);
        convertSizeL = Number(newSizeL);
        convertSizeXL = Number(newSizeXL);
        newAmount =+ convertSizeS + convertSizeM + convertSizeL + convertSizeXL;
        console.log(newAmount);

        existingEntries = JSON.parse(localStorage.getItem("faktura"));
        if(existingEntries == null) existingEntries = [], console.log("array skapad");
    
        let faktura = {
            name: objectName,
           price: newProdPrice,
           sizes: {
               small: newSizeS,
               medium: newSizeM,
               large: newSizeL,
               xlarge: newSizeXL,
               },
           color: newColor,
        }
        // Save allEntries back to local storage
        existingEntries.push(faktura);

    localStorage.setItem("faktura", JSON.stringify(existingEntries));
        console.log(existingEntries);
    });


    /* 
    localStorage.clear(); // Tar bort all localStorage */

    /* Ens "varukorg" localstorage försvinner, är det då smart att lägga fakturaOrder som
    tillfälligt localstorage endast för faktura sidan och sen när man har laddat ner den eller
    bytt sida så clearas den" 
    */ 
    console.log("Beställning lagd");

}
