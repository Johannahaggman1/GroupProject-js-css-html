let checkVarukorg = localStorage.getItem("varukorg"); 
let checkVarukorgObject = JSON.parse(checkVarukorg);

let divValues = document.querySelector(".values");
let sumDiv = document.querySelector(".sumOfTotal");
console.log(checkVarukorgObject)


let sumOfTotal = 0; 

for (let i = 0; i < checkVarukorgObject.length; i++) {

    let productName = checkVarukorgObject[i].name;
    let productColor = checkVarukorgObject[i].color;
    let productPrice = checkVarukorgObject[i].price;
    let productQuantity = checkVarukorgObject[i].amount;
    let productTotalPrice = checkVarukorgObject[i].totalprice;

    let listItem = document.createElement("div");
    listItem.className = "rad";
    listItem.innerHTML = 
    "<div class='product-name'>" + productName + "(" + productColor + ")" + "</div>"
    + "<div class='product-amount'>" + productQuantity + "</div>" 
    + "<div class='product-price'>" + productPrice + "</div>" 
    + "<div class='product-totalprice'>" + productTotalPrice + "</div>";
    divValues.append(listItem);
 console.log(productTotalPrice)
   
     sumOfTotal += productTotalPrice;
    console.log(sumOfTotal)

    sumOfTotalVAT = sumOfTotal * 0.75;
    console.log(sumOfTotalVAT)

    //lägg till i en parent element 
    }
 

    let totalDiv = document.createElement("div");
    totalDiv.className = "totalDiv";
    totalDiv.innerHTML = 
    "<div class='countTotal'>" + " Total amount: " + sumOfTotal + "</div>"

   console.log(totalDiv.textContent)
    sumDiv.append(totalDiv);    
    
   let totalVatDiv = document.createElement("div");
    totalVatDiv.className = "totalVatDiv";
    totalVatDiv.innerHTML = 
    "<div class='sumOfVat'>" + "Excluding VAT: " + sumOfTotalVAT + "</div>"
    sumDiv.append(totalVatDiv);
 
        const printbtn = document.querySelector(".button-PrintPDF");


        function Skrivut() {
            window.print(".A4");
           localStorage.clear(); 
        }
            printbtn.addEventListener("click", Skrivut);