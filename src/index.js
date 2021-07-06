const productImage = document.getElementById('product');

const requestURL = "products.json"
const request = new XMLHttpRequest();
request.open('GET', requestURL, true);

request.responseType = 'json';
request.send();

request.onload = function() {
  const products = request.response;
  showProducts(products);
}

function showProducts (jsonObj) {
  const allProducts = jsonObj["products"];

  const wrapper = document.getElementsByClassName("wrapper");
  const card = document.getElementsByClassName("card")

  const h4 = document.getElementById("product-name");
  const image = document.getElementById("product-img");
  const price = document.getElementById("price");
  const priceDiscount = document.getElementById("price-discount");
  const priceInstallment = document.getElementById("price-installment");
  const productLink = document.getElementById("product-link");

  const allFlags = document.getElementsByClassName("flags");
  const discount = document.getElementsByClassName("discount");
  const freeShipping = document.getElementsByClassName("free-shipping")

  const star1 = document.getElementById('img-1');
  const star2 = document.getElementById('img-2');
  const star3 = document.getElementById('img-3');
  const star4 = document.getElementById('img-4');
  const star5 = document.getElementById('img-5');

  function renderReview() {
    if (allProducts[i].review === "1") {
      star1.src = "assets/star-yellow-icon.png";
      star2.src = "assets/star-icon.png";
      star3.src = "assets/star-icon.png";
      star4.src = "assets/star-icon.png";
      star5.src = "assets/star-icon.png";
    } else if (allProducts[i].review === "2") {
      star1.src = "assets/star-yellow-icon.png";
      star2.src = "assets/star-yellow-icon.png";
      star3.src = "assets/star-icon.png";
      star4.src = "assets/star-icon.png";
      star5.src = "assets/star-icon.png";
    } else if (allProducts[i].review === "3") {
      star1.src = "assets/star-yellow-icon.png";
      star2.src = "assets/star-yellow-icon.png";
      star3.src = "assets/star-yellow-icon.png";
      star4.src = "assets/star-icon.png";
      star5.src = "assets/star-icon.png";
    } else if (allProducts[i].review === "4") {
      star1.src = "assets/star-yellow-icon.png";
      star2.src = "assets/star-yellow-icon.png";
      star3.src = "assets/star-yellow-icon.png";
      star4.src = "assets/star-yellow-icon.png";
      star5.src = "assets/star-icon.png";
    } else if (allProducts[i].review === "5") {
     star1.src = "assets/star-yellow-icon.png";
     star2.src = "assets/star-yellow-icon.png";
     star3.src = "assets/star-yellow-icon.png";
     star4.src = "assets/star-yellow-icon.png";
     star5.src = "assets/star-yellow-icon.png";
    } else {
      star1.src = "assets/star-icon.png";
      star2.src = "assets/star-icon.png";
      star3.src = "assets/star-icon.png";
      star4.src = "assets/star-icon.png";
      star5.src = "assets/star-icon.png";
    }
  }

  for (var i=0; i<allProducts.length; i++) {
    h4.textContent = allProducts[i].name;
    image.src = allProducts[i].imagem;
    image.alt = allProducts[i].name;
    productLink.href = `https://${allProducts[i].product_link}`;
    const productFlags  = allProducts[i].flags;
    const fullPrice = parseFloat(allProducts[i].price.price)
    const realFullPrice = fullPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const discountPrice = parseFloat(allProducts[i].price.price_discount);
    const realDiscountPrice = discountPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const realInstallmentPrice = ((fullPrice)/10).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    renderReview();

    if (allProducts[i].price.price_discount === undefined) {
      price.textContent = "";
      priceDiscount.textContent = realFullPrice;
      priceInstallment.textContent = realInstallmentPrice;
    } else {
      price.textContent = realFullPrice;
      priceDiscount.textContent = ` | ${realDiscountPrice}`;
      priceInstallment.textContent = realInstallmentPrice;
    }

    for (var j=0; j<productFlags.length; j++) {
      if(productFlags[0] === false) {
        allFlags[0].style.display = "none";
      } else {
        discount[0].textContent = productFlags[1];
        freeShipping[0].textContent = productFlags[2];
      }
    }

    wrapper[0].appendChild(card[0]);
  }
}