import {
  getNode,
  insertLast,
  tiger,
  xhrPromise,
  css,
  visibleElement,
  invisibleElement,
  aadCart,
} from '../lib/index.js';

const secondSwiper = getNode('.swiper2 .swiper-wrapper');
const thirdSwiper = getNode('.swiper3 .swiper-wrapper');
const addCartPopup = getNode('.add-cart');
tiger.get('http://localhost:3000/products');
xhrPromise
  .get('http://localhost:3000/products')
  .then((data) => {
    // console.log(res[0].name);
    // console.log(data);
    data.forEach((item, index) => {
      let id = item.id;
      let name = item.name;
      let saleRatio =
        item.saleRatio !== 0
          ? item.saleRatio * 100 + '%'
          : '';
      let currentPrice = item.price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      let salePrice =
        item.salePrice !== 0
          ? item.salePrice
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 원'
          : '';
      let img = item.image.thumbnail;
      let alt = item.image.alt;
      let description = item.description;
      let slider = `slider${index}`;
      let slider2 = `slider${index + 15}`;
      insertLast(
        secondSwiper,
        `<div class="swiper-slide ${slider}">
        <a
        href="#"
        class="swiper-product"
        id = ${id}
      >
        <div
          class="swiper-product__image-container"
        >
          <img
            class="swiper-product__image-container__tumbnail"
            src="./assets/productList/${img}"
            alt=${alt}
          />
          <button
            class="swiper-product__image-container__shopping-cart"
          >
            <img
              src="./assets/icons/Icon/Cart.svg"
              alt="장바구니 아이콘"
            />
          </button>
        </div>
        <ul class="swiper-product__info">
          <h3
            class="swiper-product__info__name"
          >
            ${name}
          </h3>
          <li
            class="swiper-product__info__price"
          >
            ${salePrice}
          </li>
        </ul>
      </a>
    </div>`
      );
      insertLast(
        thirdSwiper,
        `<div class="swiper-slide ${slider2}">
        <a
        href="#"
        class="swiper-product"
        id = ${id}
      >
        <div
          class="swiper-product__image-container"
        >
          <img
            class="swiper-product__image-container__tumbnail"
            src="./assets/productList/${img}"
            alt=${alt}
          />
          <button
            class="swiper-product__image-container__shopping-cart"
          >
            <img
              src="./assets/icons/Icon/Cart.svg"
              alt="장바구니 아이콘"
            />
          </button>
        </div>
        <ul class="swiper-product__info">
          <h3
            class="swiper-product__info__name"
          >
            ${name}
          </h3>
          <li
            class="swiper-product__info__price"
          >
            ${salePrice}
          </li>
        </ul>
      </a>
    </div>`
      );

      aadCart(
        id,
        slider,
        name,
        item.price,
        item.salePrice,
        item.stock,
        item.category,
        img,
        alt,
        item.saleRatio
      );
      aadCart(
        id,
        slider,
        name,
        item.price,
        item.salePrice,
        item.stock,
        item.category,
        img,
        alt,
        item.saleRatio
      );
    });
  });
