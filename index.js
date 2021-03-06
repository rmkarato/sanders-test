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

  for (var i=0; i<allProducts.length; i++) {
    const myCard = document.createElement('div');
    myCard.classList.add('card');

    const productLink = document.createElement('a');
    productLink.href = `https://${allProducts[i].product_link}`;

    const favoriteArea = document.createElement('div');
    favoriteArea.classList.add('favorite-area');
    
    const favoriteImg = document.createElement('img');
    favoriteImg.setAttribute('id', 'favorite-img');
    favoriteImg.src = "assets/heart-icon.png";
    favoriteImg.alt = "FavoriteIcon";
    favoriteImg.title = "Curtir"

    const container = document.createElement('div');
    container.classList.add('container');

    const productImage = document.createElement('div');
    productImage.classList.add('product-image');

    const image = document.createElement('img');
    image.setAttribute('id', 'product-img');
    image.src = allProducts[i].imagem;
    image.alt = allProducts[i].name;

    const flags = allProducts[i].flags;

    const allFlags = document.createElement('div');
    allFlags.classList.add('flags');
    
    validateFlags = () => {
      if (flags[0] === true && flags[1] && flags[2]) {
        const discount = document.createElement('p');
        discount.classList.add('discount');
        discount.textContent = flags[1];
        allFlags.appendChild(discount);

        const freeShipping = document.createElement('p');
        freeShipping.classList.add('free-shipping');
        freeShipping.textContent = flags[2];
        allFlags.appendChild(freeShipping);
      } else if (flags[0] === true && flags[2] == undefined) {
        const discount = document.createElement('p');
        discount.classList.add('discount');
        discount.textContent = flags[1];
        discount.style.border = 'transparent';
        discount.style.color = 'transparent';
        allFlags.appendChild(discount);

        const freeShipping = document.createElement('p');
        freeShipping.classList.add('free-shipping');
        freeShipping.textContent = flags[1];
        freeShipping.style.width = '90%';
        allFlags.style.flexDirection = 'row-reverse';        
        allFlags.appendChild(freeShipping);
      } else {
        allFlags.style.border = 'transparent';
      }
    }

    validateFlags();
    
    const ratingStars = document.createElement('div');
    ratingStars.classList.add('rating-stars');

    const star1 = document.createElement('img');
    star1.setAttribute('id', 'img-1');
    ratingStars.appendChild(star1);
    const star2 = document.createElement('img');
    star2.setAttribute('id', 'img-2');
    ratingStars.appendChild(star2);
    const star3 = document.createElement('img');
    star3.setAttribute('id', 'img-3');
    ratingStars.appendChild(star3);
    const star4 = document.createElement('img');
    star4.setAttribute('id', 'img-4');
    ratingStars.appendChild(star4);
    const star5 = document.createElement('img');
    star5.setAttribute('id', 'img-5');
    ratingStars.appendChild(star5);

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

    renderReview();

    const myH4 = document.createElement('h4');
    myH4.textContent = allProducts[i].name;

    const price = document.createElement('p');
    price.classList.add('price');

    const strikethroughPrice = document.createElement('s');
    strikethroughPrice.setAttribute('id', 'price');

    const discountPrice = document.createElement('b');
    discountPrice.setAttribute('id', 'price-discount');

    const installments = document.createElement('p');
    installments.classList.add('installments');
    installments.textContent = "ou em 10x de "

    const installmentPrice = document.createElement('b');
    installmentPrice.setAttribute('id', 'price-installment');

    const fullPrice = parseFloat(allProducts[i].price.price);
    const realFullPrice = fullPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const priceDiscount = parseFloat(allProducts[i].price.price_discount);
    const realDiscountPrice = priceDiscount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const realInstallmentPrice = ((fullPrice)/10).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    if (allProducts[i].price.price_discount === undefined) {
      strikethroughPrice.textContent = "";

      discountPrice.textContent = realFullPrice;
      installmentPrice.textContent = realInstallmentPrice;
    } else {
      strikethroughPrice.textContent = realFullPrice;
      discountPrice.textContent = ` | ${realDiscountPrice}`;
      installmentPrice.textContent = realInstallmentPrice;
    }

    const buttonAddToCart = document.createElement('button');
    buttonAddToCart.textContent = "Adicionar ao carrinho ???";
    
    cards.appendChild(myCard);

    myCard.appendChild(productLink);
    myCard.appendChild(favoriteArea);

    favoriteArea.appendChild(favoriteImg);
    productLink.appendChild(container);
    
    container.appendChild(productImage);
    productImage.appendChild(image);

    container.appendChild(allFlags);
    container.appendChild(ratingStars);
    container.appendChild(myH4);

    container.appendChild(price);
    price.appendChild(strikethroughPrice);
    price.appendChild(discountPrice);

    container.appendChild(installments);
    installments.appendChild(installmentPrice);

    container.appendChild(buttonAddToCart);
  }
}

// const slides = document.querySelectorAll(".card");
// const button = document.querySelectorAll("#button");

// function setaImagem() {
//   window.addEventListener("load",setaImagem,false);
// }

// const settings = {
//   activeCards: function(){
//     const element1 = document.querySelector(".cards .card:first-of-type");
//     const element2 = document.querySelector("card:nth-child(2)");
//     const element3 = document.querySelector("card:nth-child(3)");
//     const element4 = document.querySelector("card:nth-child(4)");
//     element1.classList.add("active");
//     element2.classList.add("active");
//     element3.classList.add("active");
//     element4.classList.add("active");
//   }
// }

// settings.activeCards();

// function slide() {
//   element = document.querySelector(".active");
//   if (element.nextElementSibling){
//       element.nextElementSibling.classList.add("active");
//       element.classList.remove("active");
//   }else{
//       element.classList.remove("active");
//       settings.activeCards();
//   }
// }

// function next() {
//   element = document.querySelector(".active");

//   if(element.nextElementSibling) {
//     element.nextElementSibling.classList.add("active");
//     element.classList.remove("active");
//   } else {
//     element.classList.remove("active");
//     settings.activeCards();
//   }
// }