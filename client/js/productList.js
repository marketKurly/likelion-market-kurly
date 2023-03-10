import {
  getNode,
  attr,
  insertLast,
  tiger,
  xhrPromise,
} from '../lib/index.js';

let url = 'http://localhost:3000/products';

// 체크 초기화
const resetButton = document.querySelector('.check-reset');
const checkbutton = document.querySelectorAll('.check2');

let a = () => {
  checkbutton.forEach((item) => {
    item.checked = false;
  });
};

resetButton.addEventListener('click', a);

// 페이지네이션
$(function () {
  let container = $('#pagination');
  container.pagination({
    dataSource: [
      { name: 1 },
      { name: 1 },
      { name: 1 },
      { name: 1 },
      { name: 1 },
      { name: 1 },
      { name: 1 },
      { name: 1 },
      { name: 1 },
      { name: 1 },
      { name: 1 },
      { name: 1 },
      { name: 1 },
      { name: 1 },
      { name: 1 },
    ],
    pageSize: 5,
    callback: function (data, pagination) {
      var dataHtml;

      $.each(data, function (index, item) {
        dataHtml += item.name;
      });

      $('#data-container').html(dataHtml);
    },
  });
});

// 버튼 핸들러
const group = document.querySelectorAll(
  '.group-menu__button'
);

function handleType(e) {
  e.preventDefault();
  let isActive = document.querySelector(
    '.group-menu__button.is-active'
  );
  let target = e.target.closest('.group-menu__button');

  if (isActive !== target) {
    target.classList.add('is-active');
    isActive.classList.remove('is-active');
  }
}

group.forEach((type) =>
  type.addEventListener('click', handleType)
);

// 상품 주소 받아오기
const getItemList = getNode('.product__list--grid');

xhrPromise.get(url).then((data) => {
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
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'
        : '';
    let img = item.image.thumbnail;
    let alt = item.image.alt;
    let description = item.description;
    let template = insertLast(
      getItemList,
      /* html */
      `<a
        href="./productDetail.html"
        class="product__item">
        <div class="product__list__img1">
          <div class="product__list__img2">
            <img
              src="../assets/productList/${item.image.thumbnail}"
              alt="${item.image.alt}"
            />
            <div>
              <button
                type="button"
                class="cart-icon"
              >
                <img
                  src="../css/img/Icon/Cart.svg"
                  alt="카트아이콘"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="product__list__txt">
          <span class="badge1">샛별배송</span>
          <span class="badge2"
            >${name}</span
          >
          <div class="badge3">
            <div>
              <span class="discount">${saleRatio}</span>
              <span class="price">${salePrice}</span>
            </div>
            <div>
              <span class="out_price">${currentPrice}</span>
            </div>
          </div>
          <p class="badge4">
            ${description}
          </p>
          <div class="badge5">
            <span class="karly_only"
              >karly only</span
            >
            <span class="limited_quantity"
              >한정 수량</span
            >
          </div>
        </div>
      </a>`
    );
  });
});

// 슬라이드 기능
$(document).ready(function () {
  $('.accordion--set__head>button').click(function () {
    var submenu = $(this).next('ul');

    if (submenu.is(':visible')) {
      submenu.slideUp();
    } else {
      submenu.slideDown();
    }
  });
});

//
$(document).ready(function () {
  $('.base1').click(function () {
    $('.delete1').hide();
  });
});

$(document).ready(function () {
  $('.base2').click(function () {
    $('.delete2').hide();
  });
});

$(document).ready(function () {
  $('.base3').click(function () {
    $('.delete2').hide();
  });
});
