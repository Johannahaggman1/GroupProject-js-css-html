getAllProducts();
function getAllProducts() {

        for (let i = 0; i < allProducts.length; i++) {

        // Skapar hela kortet
        productCard = document.createElement('a');
        productCard.className = 'LinkCard';
        productCard.href = allProducts[i].link;
        productCard.innerHTML = 
         "<div class='product-cards'>"
        + "<div class='product-image'>"
        + "<img src=" + productOne.image + "></div>"
        + "<div class='product-textbox'> <p class='product-name'>" + productOne.name + "</p>"
        + "<p class='product-price'>" + productOne.price + "</p></div>"
        ;

        prodListWrapper.append(productCard)
    }
}