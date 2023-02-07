import {
  getNode,
  insertLast,
  tiger,
  xhrPromise,
} from '../lib/index.js';

const secondswiper = getNode('.swiper2 .swiper-wrapper');
tiger.get('http://localhost:3000/products');
xhrPromise
  .get('http://localhost:3000/products')
  .then((data) => {
    // console.log(res[0].name);
    console.log(data);
    data.forEach((item) => {
      insertLast(
        secondswiper,
        `<div class="swiper-slide">
        <a
        href="#"
        class="swiper-product"
        id = ${item.id}
      >
        <div
          class="swiper-product__image-container"
        >
          <img
            class="swiper-product__image-container__tumbnail"
            src=${item.image.thumbnail}
            alt=${item.image.alt}
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
            ${item.name}
          </h3>
          <li
            class="swiper-product__info__price"
          >
            ${item.price} 원
          </li>
        </ul>
      </a>
    </div>`
      );
    });

    // console.log(secondswiper);
  });

// insertLast(
//   secondswiper,
//   `<div class="swiper-slide">
//   <a
//     href="#"
//     class="swiper-product tangtang"
//   >
//     <div
//       class="swiper-product__image-container"
//     >
//       <img
//         class="swiper-product__image-container__tumbnail"
//         src="./assets/tangtang/thumbnail.jpg"
//         alt="탱탱쫄면"
//       />
//       <button
//         class="swiper-product__image-container__shopping-cart"
//       >
//         <img
//           src="./assets/icons/Icon/Cart.svg"
//           alt="장바구니 아이콘"
//         />
//       </button>
//     </div>
//     <ul class="swiper-product__info">
//       <h3
//         class="swiper-product__info__name"
//       >
//         [풀무원] 탱탱쫄면 (4개입)aaaa
//       </h3>
//       <li
//         class="swiper-product__info__price"
//       >
//         4,980 원aaaa
//       </li>
//     </ul>
//   </a>
// </div>`
// );
